using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IPollEntity : IPublicationEntity
    {
    }

    public interface IPollEntity<T> : IPublicationEntity<T>
    {
    }

    public abstract class PollEntity<T> : PublicationEntity<T>, IPollEntity<T>
    {
        public string Title { get; set; }

        [DataType(DataType.Html)]
        public string Description { get; set; }

        [DataType(DataType.ImageUrl)]
        public string ImageUrl { get; set; }

        public virtual IEnumerable<IEntityOption<object>> Options { get; set; }
    }

}
