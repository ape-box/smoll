using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Smoll.Data.Entities;
using Smoll.Data.Pgsql.Repositories;
using Smoll.Data.Repositories;

namespace Smoll.Api.Front.Models
{
    public interface IQueryRepository : IReadOnlyRepository
    {
        Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>((int? pageNumber, int? pageSize) pagination)
            where TEntity : class, IPublicationEntity;
    }

    public class QueryRepository : EntityFrameworkReadOnlyRepository<ApplicationContext>, IQueryRepository
    {
        public QueryRepository(ApplicationContext context)
            : base(context)
        {
        }

        public Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>((int? pageNumber, int? pageSize) pagination)
            where TEntity : class, IPublicationEntity
            => GetAsync<TEntity>(
                filter: t => t.Status == PublishStatus.Published
                    && t.PublishDate <= DateTime.UtcNow
                    && t.ExpireDate >= DateTime.UtcNow,
                orderBy: dbSet => dbSet.OrderBy(t => t.PublishDate),
                includeProperties: null,
                skip: PageNumberToSkip(pagination.pageNumber ?? DefaultPageNumber, NormalizePageSize(pagination.pageSize ?? DefaultPageSize)),
                take: NormalizePageSize(pagination.pageSize ?? DefaultPageSize));
    }
}
