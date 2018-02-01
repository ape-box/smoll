using System.Threading.Tasks;
using Smoll.Data.Entities;

namespace Smoll.Data.Repositories
{
    public interface IRepository : IReadOnlyRepository
    {
        IRepository Create<TEntity>(TEntity entity, string createdBy = null)
            where TEntity : class, IEntity;

        IRepository Update<TEntity>(TEntity entity, string modifiedBy = null)
            where TEntity : class, IEntity;

        IRepository Delete<TEntity>(object id)
            where TEntity : class, IEntity;

        IRepository Delete<TEntity>(TEntity entity)
            where TEntity : class, IEntity;
        
        IRepository DisableEntity<TEntity>(object id, string modifiedBy = null)
            where TEntity : class, IEntity;
        
        IRepository DisableEntity<TEntity>(TEntity entity, string modifiedBy = null)
            where TEntity : class, IEntity;
        
        IRepository HideEndity<TEntity>(object id, string modifiedBy = null)
            where TEntity : class, IEntity;
        
        IRepository HideEndity<TEntity>(TEntity entity, string modifiedBy = null)
            where TEntity : class, IEntity;

        int Save();

        Task<int> SaveAsync();
    }
}
