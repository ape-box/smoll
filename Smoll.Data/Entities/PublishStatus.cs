using System.ComponentModel;

namespace Smoll.Data.Entities
{
    // TODO: create postrgres "publish_status" type
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
