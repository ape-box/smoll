using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Smoll.Data.Contracts;
using Smoll.Data.Entities;
using Smoll.Data.Repositories;

namespace Smoll.Data.Contexts
{
    using Smoll.Data.Models.Db;

    public class QueryContext : DbContext, IQueryContext
    {
        public virtual DbSet<Article> Articles { get; set; }

        public QueryContext(DbContextOptions<QueryContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Article>().ToTable("Articles");
        }
    }

    public interface IQueryRepository : IRepository
    {
        int DefaultPageNumber { get; }
        int DefaultPageSize { get; }

        IEnumerable<TEntity> GetOrderedPage<TEntity>(int pageNumber, int pageSize)
            where TEntity : class, IPublicationEntity;

        Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>(int pageNumber, int pageSize)
            where TEntity : class, IPublicationEntity;
    }

    public class QueryRepository : EntityFrameworkRepository<QueryContext>, IQueryRepository
    {
        public QueryRepository(QueryContext context)
            : base(context)
        {
        }

        int IQueryRepository.DefaultPageNumber => DefaultPageNumber;

        int IQueryRepository.DefaultPageSize => DefaultPageSize;

        public IEnumerable<TEntity> GetOrderedPage<TEntity>(int pageNumber = DefaultPageNumber, int pageSize = DefaultPageSize)
            where TEntity : class, IPublicationEntity
            => Get<TEntity>(
                filter: t => t.Status == PublishStatus.Published
                    && t.PublishDate <= DateTime.UtcNow
                    && t.ExpireDate > DateTime.UtcNow,
                orderBy: dbSet => dbSet.OrderBy(t => t.PublishDate),
                includeProperties: null,
                skip: PageNumberToSkip(pageNumber, NormalizePageSize(pageSize)),
                take: NormalizePageSize(pageSize));

        public Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>(int pageNumber = DefaultPageNumber, int pageSize = DefaultPageSize)
            where TEntity : class, IPublicationEntity
            => GetAsync<TEntity>(
                filter: t => t.Status == PublishStatus.Published
                    && t.PublishDate <= DateTime.UtcNow
                    && t.ExpireDate > DateTime.UtcNow,
                orderBy: dbSet => dbSet.OrderBy(t => t.PublishDate),
                includeProperties: null,
                skip: PageNumberToSkip(pageNumber, NormalizePageSize(pageSize)),
                take: NormalizePageSize(pageSize));

    }
}
