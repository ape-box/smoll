using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IQueueEntity : IPublicationEntity
    {
    }

    public interface IQueueEntity<T> : IPublicationEntity<T>
    {
    }

    public abstract class QueueEntity<T> : PublicationEntity<T>, IQueueEntity<T>
    {
        public string Title { get; set; }

        [DataType(DataType.Html)]
        [StringLength(155)]
        public string Description { get; set; }

        public virtual IEnumerable<IEntityOption<object>> Options { get; set; }
    }
}
