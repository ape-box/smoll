using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Smoll.Data.Entities;
using Smoll.Data.Repositories;

namespace Smoll.Data.Pgsql.Repositories
{
    public abstract class EntityFrameworkReadOnlyRepository<TContext> : IReadOnlyRepository
        where TContext : DbContext
    {
        protected const char PropertiesSeparatorSymbol = ',';
        protected static readonly char[] PropertiesSeparators = { PropertiesSeparatorSymbol };
        protected readonly TContext context;

        public const int DefaultPageNumber = 1;
        public const int DefaultPageSize = 5;

        public EntityFrameworkReadOnlyRepository(TContext context)
        {
            this.context = context;
        }

        protected static int NormalizePageSize(int pageSize)
            => pageSize > 0 ? pageSize : DefaultPageSize;

        protected static int PageNumberToSkip(int pageNumber, int normalizedPageSize)
            => pageNumber > DefaultPageNumber
                ? (pageNumber - DefaultPageNumber) * normalizedPageSize
                : 0;

        protected  virtual IQueryable<TEntity> GetQueryable<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = null,
            int? skip = null,
            int? take = null)
            where TEntity : class, IEntity
        {
            includeProperties = includeProperties ?? string.Empty;
            var query = context.Set<TEntity>() as IQueryable<TEntity>;

            throw new Exception("TestFlow");

            if (filter != null)
            {
                query = query.Where(filter);
            }

            query = includeProperties.Split(PropertiesSeparators, StringSplitOptions.RemoveEmptyEntries).Aggregate(query, (current, includeProperty) => current.Include(includeProperty));

            if (orderBy != null)
            {
                query = orderBy(query);
            }

            if (skip.HasValue)
            {
                query = query.Skip(skip.Value);
            }

            if (take.HasValue)
            {
                query = query.Take(take.Value);
            }

            return query;
        }

        public virtual IEnumerable<TEntity> GetAll<TEntity>(
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = null,
            int? skip = null,
            int? take = null)
            where TEntity : class, IEntity
        => GetQueryable(null, orderBy, includeProperties, skip, take).ToList();

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync<TEntity>(
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = null,
            int? skip = null,
            int? take = null)
            where TEntity : class, IEntity
        => await GetQueryable(null, orderBy, includeProperties, skip, take).ToListAsync();

        public virtual IEnumerable<TEntity> Get<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = null,
            int? skip = null,
            int? take = null)
            where TEntity : class, IEntity
        => GetQueryable(filter, orderBy, includeProperties, skip, take).ToList();

        public virtual async Task<IEnumerable<TEntity>> GetAsync<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = null,
            int? skip = null,
            int? take = null)
            where TEntity : class, IEntity
        => await GetQueryable(filter, orderBy, includeProperties, skip, take).ToListAsync();

        public virtual TEntity GetOne<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            string includeProperties = null)
            where TEntity : class, IEntity
        => GetQueryable(filter, null, includeProperties).SingleOrDefault();

        public virtual Task<TEntity> GetOneAsync<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            string includeProperties = null)
            where TEntity : class, IEntity
        => GetQueryable(filter, null, includeProperties).SingleOrDefaultAsync();

        public virtual TEntity GetFirst<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = null)
            where TEntity : class, IEntity
        => GetQueryable(filter, orderBy, includeProperties).FirstOrDefault();

        public virtual Task<TEntity> GetFirstAsync<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = null)
            where TEntity : class, IEntity
        => GetQueryable(filter, orderBy, includeProperties).FirstOrDefaultAsync();

        public virtual TEntity GetById<TEntity>(object id)
            where TEntity : class, IEntity
        => context.Set<TEntity>().Find(id);

        public virtual Task<TEntity> GetByIdAsync<TEntity>(object id)
            where TEntity : class, IEntity
        => context.Set<TEntity>().FindAsync(id);

        public virtual int GetCount<TEntity>(Expression<Func<TEntity, bool>> filter = null)
            where TEntity : class, IEntity
        => GetQueryable(filter).Count();

        public virtual Task<int> GetCountAsync<TEntity>(Expression<Func<TEntity, bool>> filter = null)
            where TEntity : class, IEntity
        => GetQueryable(filter).CountAsync();

        public virtual bool GetExists<TEntity>(Expression<Func<TEntity, bool>> filter = null)
            where TEntity : class, IEntity
        => GetQueryable(filter).Any();

        public virtual Task<bool> GetExistsAsync<TEntity>(Expression<Func<TEntity, bool>> filter = null)
            where TEntity : class, IEntity
        => GetQueryable(filter).AnyAsync();
    }
}
