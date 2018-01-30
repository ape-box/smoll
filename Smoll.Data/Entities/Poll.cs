using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IModifiablePollEntity : IModifiablePublicationEntity
    {
        string Title { get; set; }
        string Description { get; set; }
        string ImageUrl { get; set; }
    }

    public interface IPollEntity : IModifiablePollEntity, IPublicationEntity
    {
    }

    public interface IPollEntity<T> : IModifiablePollEntity, IPublicationEntity<T>
    {
    }

    public abstract class PollEntity<T> : PublicationEntity<T>, IPollEntity<T>
    {
        public string Title { get; set; }

        [DataType(DataType.Html)]
        public string Description { get; set; }

        [DataType(DataType.ImageUrl)]
        public string ImageUrl { get; set; }
    }

}
