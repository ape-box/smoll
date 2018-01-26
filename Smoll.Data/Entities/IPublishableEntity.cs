namespace Smoll.Data.Entities
{
    public interface IPublishableEntity : IModifiablePublishableEntity, IEntity
    {
    }

    public interface IPublishableEntity<T> : IPublishableEntity, IEntity<T>
    {
    }
}
