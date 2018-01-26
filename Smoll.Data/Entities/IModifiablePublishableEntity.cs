using System;

namespace Smoll.Data.Entities
{
    public interface IModifiablePublishableEntity : IModifiableEntity
    {
        PublishStatus Status { get; set; }
        DateTime? PublishDate { get; set; }
        DateTime? ExpireDate { get; set; }
    }
}
