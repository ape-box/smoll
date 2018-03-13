using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Smoll.Data.Entities;
using Smoll.Data.Pgsql.Repositories;
using Smoll.Data.Repositories;

namespace Smoll.Api.Back.Models
{
    public interface IAdminRepository : IRepository
    {
        Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>((int? pageNumber, int? pageSize) pagination)
            where TEntity : class, IPublicationEntity;

        IAdminRepository Update<TEntity>(object id, TEntity entity, string modifiedBy = null)
            where TEntity : class, IEntity;
    }

    public class AdminRepository : EntityFrameworkRepository<ApplicationContext>, IAdminRepository
    {
        public AdminRepository(ApplicationContext context)
            : base(context)
        {
        }

        IAdminRepository IAdminRepository.Update<TEntity>(object id, TEntity entity, string modifiedBy)
            => Update(entity, modifiedBy) as IAdminRepository;

        public Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>((int? pageNumber, int? pageSize) pagination)
            where TEntity : class, IPublicationEntity
            => GetAsync<TEntity>(
                filter: null,
                orderBy: dbSet => dbSet.OrderBy(t => t.PublishDate),
                includeProperties: null,
                skip: PageNumberToSkip(pagination.pageNumber ?? DefaultPageNumber, NormalizePageSize(pagination.pageSize ?? DefaultPageSize)),
                take: NormalizePageSize(pagination.pageSize ?? DefaultPageSize));

        public AdminRepository Update<TEntity>(object id, TEntity entity, string modifiedBy)
            where TEntity : class, IEntity
        {
            if (id != entity.Id) {
                throw new ArgumentOutOfRangeException(nameof(entity.Id));
            }

            return Update(entity, modifiedBy) as AdminRepository;
        }
    }
}
