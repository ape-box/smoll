using System;
using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IModifiablePublicationEntity : IModifiableEntity
    {
        PublishStatus Status { get; set; }
        DateTime? PublishDate { get; set; }
        DateTime? ExpireDate { get; set; }
    }

    public interface IPublicationEntity : IModifiablePublicationEntity, IEntity
    {
    }

    public interface IPublicationEntity<T> : IPublicationEntity, IEntity<T>
    {
    }

    public abstract class PublicationEntity<T> : Entity<T>, IPublicationEntity<T>
    {
        private PublishStatus? status;
        public PublishStatus Status
        {
            get => status ?? PublishStatus.Draft;
            set => status = value;
        }

        private DateTime? publishDate;
        [DataType(DataType.DateTime)]
        public DateTime? PublishDate
        {
            get => !publishDate.HasValue && Status == PublishStatus.Published
                ? (publishDate = DateTime.UtcNow)
                : publishDate;
            set => publishDate = value;
        }

        [DataType(DataType.DateTime)]
        public DateTime? ExpireDate { get; set; }
    }
}
