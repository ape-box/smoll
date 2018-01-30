using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IModifiableQueueEntity : IModifiablePublicationEntity
    {
        string Title { get; set; }
        string Description { get; set; }
        IEnumerable<IEntityOption<object>> Options { get; set; }
    }

    public interface IQueueEntity : IModifiableQueueEntity, IPublicationEntity
    {
    }

    public interface IQueueEntity<T> : IModifiableQueueEntity, IPublicationEntity<T>
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
