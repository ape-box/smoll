using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Smoll.Data.Contracts;
using Smoll.Data.Entities;
using Smoll.Data.Models.Db;
using Smoll.Data.Repositories;

namespace Smoll.Data.Contexts
{
    public class MyLoggerProvider : ILoggerProvider
    {
        public ILogger CreateLogger(string categoryName)
        {
            return new MyLogger();
        }

        public void Dispose()
        { }

        private class MyLogger : ILogger
        {
            public bool IsEnabled(LogLevel logLevel)
            {
                return true;
            }

            public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            {
                Console.WriteLine(formatter(state, exception));
            }

            public IDisposable BeginScope<TState>(TState state)
            {
                return null;
            }
        }
    }

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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var lf = new LoggerFactory();
            lf.AddProvider(new MyLoggerProvider());
            optionsBuilder.UseLoggerFactory(lf);
        }
    }

    public interface IQueryRepository : IRepository
    {
        int DefaultPageNumber { get; }
        int DefaultPageSize { get; }

        //IEnumerable<Article> GetOrderedPage<TEntity>(int pageNumber, int pageSize)
        //    where TEntity : class, IPublicationEntity;

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

        //public IEnumerable<Article> GetOrderedPage<TEntity>(int pageNumber = DefaultPageNumber,
        //    int pageSize = DefaultPageSize)
        //    where TEntity : class, IPublicationEntity
        //    => context.Articles.AsEnumerable();

        public IEnumerable<TEntity> GetOrderedPage<TEntity>(int pageNumber = DefaultPageNumber,
            int pageSize = DefaultPageSize)
            where TEntity : class, IPublicationEntity
            => context.Set<TEntity>().ToList();
            //=> Get<TEntity>(
            //    filter: null,/*t => /*t.Status == PublishStatus.Published
            //        && t.PublishDate <= DateTime.UtcNow
            //        && t.ExpireDate > DateTime.UtcNow,*/
            //    orderBy: dbSet => dbSet.OrderBy(t => t.PublishDate),
            //    includeProperties: null,
            //    skip: PageNumberToSkip(pageNumber, NormalizePageSize(pageSize)),
            //    take: NormalizePageSize(pageSize));

        public Task<IEnumerable<TEntity>> GetOrderedPageAsync<TEntity>(int pageNumber = DefaultPageNumber, int pageSize = DefaultPageSize)
            where TEntity : class, IPublicationEntity
            => GetAsync<TEntity>(
                filter: null,/*t => /*t.Status == PublishStatus.Published
                    && t.PublishDate <= DateTime.UtcNow
                    && t.ExpireDate > DateTime.UtcNow,*/
                orderBy: dbSet => dbSet.OrderBy(t => t.PublishDate),
                includeProperties: null,
                skip: PageNumberToSkip(pageNumber, NormalizePageSize(pageSize)),
                take: NormalizePageSize(pageSize));

    }
}
