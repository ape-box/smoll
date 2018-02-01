using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IProposalEntity : IPublicationEntity
    {
    }

    public interface IProposalEntity<T> : IPublicationEntity<T>
    {
    }

    public abstract class ProposalEntity<T> : PublicationEntity<T>, IProposalEntity<T>
    {
        public string Title { get; set; }

        public string Subtitle { get; set; }

        [StringLength(80)]
        [Required]
        public string Slug { get; set; }

        [DataType(DataType.MultilineText)]
        [StringLength(155)]
        public string Description { get; set; }

        [DataType(DataType.Html)]
        public string Abstract { get; set; }

        [DataType(DataType.Html)]
        public string Content { get; set; }
    }
}
