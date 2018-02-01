using System.ComponentModel;

namespace Smoll.Data.Entities
{
    public enum PublishStatus
    {
        [DisplayName("Draft")]
        Draft,
        [DisplayName("Published")]
        Published,
        [DisplayName("Archived")]
        Archived,
        [DisplayName("TakenDown")]
        TakenDown
    }
}
