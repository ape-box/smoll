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
        int DefaultPageNumber { get; }
        int DefaultPageSize { get; }

        Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>(int pageNumber, int pageSize)
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

        int IAdminRepository.DefaultPageNumber => DefaultPageNumber;

        int IAdminRepository.DefaultPageSize => DefaultPageSize;

        IAdminRepository IAdminRepository.Update<TEntity>(object id, TEntity entity, string modifiedBy)
            => Update(entity, modifiedBy) as IAdminRepository;

        public Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>(int pageNumber = DefaultPageNumber, int pageSize = DefaultPageSize)
            where TEntity : class, IPublicationEntity
            => GetAsync<TEntity>(
                filter: t => t.Status == PublishStatus.Published
                             && t.PublishDate <= DateTime.UtcNow
                             && t.ExpireDate >= DateTime.UtcNow,
                orderBy: dbSet => dbSet.OrderBy(t => t.PublishDate),
                includeProperties: null,
                skip: PageNumberToSkip(pageNumber, NormalizePageSize(pageSize)),
                take: NormalizePageSize(pageSize));

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
