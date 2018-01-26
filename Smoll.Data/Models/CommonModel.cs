using System;
using System.ComponentModel.DataAnnotations;
using Smoll.Data.Entities;

namespace Smoll.Data.Models
{
    public abstract class CommonModel<T> : Entity<T>, IPublishableEntity<T>
    {
        public string Name { get; set; }

        [DataType(DataType.Html)]
        public string Description { get; set; }

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
                ? publishDate = DateTime.UtcNow
                : publishDate;
            set => publishDate = value;
        }

        [DataType(DataType.DateTime)]
        public DateTime? ExpireDate { get; set; }
    }
}
