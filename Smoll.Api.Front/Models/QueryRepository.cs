using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Smoll.Data.Entities;
using Smoll.Data.Repositories;

namespace Smoll.Api.Front.Models
{
    public interface IQueryRepository : IRepository
    {
        int DefaultPageNumber { get; }
        int DefaultPageSize { get; }

        Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>(int pageNumber, int pageSize)
            where TEntity : class, IPublicationEntity;
    }

    public class QueryRepository : EntityFrameworkRepository<ApplicationContext>, IQueryRepository
    {
        public QueryRepository(ApplicationContext context)
            : base(context)
        {
        }

        int IQueryRepository.DefaultPageNumber => DefaultPageNumber;

        int IQueryRepository.DefaultPageSize => DefaultPageSize;

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
    }
}
