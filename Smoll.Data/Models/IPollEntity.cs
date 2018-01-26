using Smoll.Data.Entities;

namespace Smoll.Data.Models
{
    public interface IPollEntity : IModifiablePollEntity, IPublishableEntity
    {
    }

    public interface IPollEntity<T> : IModifiablePollEntity, IPublishableEntity<T>
    {
    }
}
