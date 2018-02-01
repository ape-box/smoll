using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Smoll.Data.Entities;
using Smoll.Data.Repositories;

namespace Smoll.Data.Pgsql.Repositories
{
    public class EntityFrameworkRepository<TContext> : EntityFrameworkReadOnlyRepository<TContext>, IRepository
        where TContext : DbContext
    {
        public EntityFrameworkRepository(TContext context)
            : base(context)
        {
        }

        IRepository IRepository.Create<TEntity>(TEntity entity, string createdBy) 
            => Create(entity, createdBy);

        IRepository IRepository.Update<TEntity>(TEntity entity, string modifiedBy) 
            => Update(entity, modifiedBy);

        IRepository IRepository.Delete<TEntity>(object id) 
            => Delete<TEntity>(id);

        IRepository IRepository.Delete<TEntity>(TEntity entity) 
            => Delete(entity);

        IRepository IRepository.DisableEntity<TEntity>(object id, string modifiedBy) 
            => DisableEntity<TEntity>(id, modifiedBy);

        IRepository IRepository.DisableEntity<TEntity>(TEntity entity, string modifiedBy) 
            => DisableEntity(entity, modifiedBy);

        IRepository IRepository.HideEndity<TEntity>(object id, string modifiedBy) 
            => DisableEntity<TEntity>(id, modifiedBy);

        IRepository IRepository.HideEndity<TEntity>(TEntity entity, string modifiedBy) 
            => DisableEntity(entity, modifiedBy);

        int IRepository.Save() 
            => Save();

        Task<int> IRepository.SaveAsync() 
            => SaveAsync(); 
        
        public EntityFrameworkRepository<TContext> Create<TEntity>(TEntity entity, string createdBy)
            where TEntity : class, IEntity
        {
            entity.CreatedDate = DateTime.UtcNow;
            entity.CreatedBy = createdBy;
            context.Set<TEntity>().Add(entity);
            
            return this;
        }
        
        public EntityFrameworkRepository<TContext> Update<TEntity>(TEntity entity, string modifiedBy)
            where TEntity : class, IEntity
        {
            entity.CreatedDate = DateTime.UtcNow;
            entity.ModifiedBy = modifiedBy;
            context.Set<TEntity>().Attach(entity);
            context.Entry(entity).State = EntityState.Modified;
            
            return this;
        }
        
        public EntityFrameworkRepository<TContext> Delete<TEntity>(object id)
            where TEntity : class, IEntity
        {
            var entity = context.Set<TEntity>().Find(id);
            Delete(entity);
            
            return this;
        }
        
        public EntityFrameworkRepository<TContext> Delete<TEntity>(TEntity entity)
            where TEntity : class, IEntity
        {
            var dbSet = context.Set<TEntity>();
            if (context.Entry(entity).State == EntityState.Detached)
            {
                dbSet.Attach(entity);
            }
            dbSet.Remove(entity);
            
            return this;
        }

        public EntityFrameworkRepository<TContext> DisableEntity<TEntity>(TEntity entity, string modifiedBy = null)
            where TEntity : class, IEntity
        {
            entity.EntityModifiable = false;
            
            return Update(entity, modifiedBy);
        }

        public EntityFrameworkRepository<TContext> DisableEntity<TEntity>(object id, string modifiedBy = null) 
            where TEntity : class, IEntity
        {
            var entity = GetById<TEntity>(id);
            
            return DisableEntity(entity, modifiedBy);
        }
        
        public EntityFrameworkRepository<TContext> HideEndity<TEntity>(TEntity entity, string modifiedBy = null)
            where TEntity : class, IEntity
        {
            entity.EntityVisible = false;
            
            return Update(entity, modifiedBy);
        }

        public EntityFrameworkRepository<TContext> HideEndity<TEntity>(object id, string modifiedBy = null) 
            where TEntity : class, IEntity
        {
            var entity = GetById<TEntity>(id);
            
            return HideEndity(entity, modifiedBy);
        }
        
        public int Save()
            => context.SaveChanges();
        
        public Task<int> SaveAsync()
            => context.SaveChangesAsync();
    }
}
