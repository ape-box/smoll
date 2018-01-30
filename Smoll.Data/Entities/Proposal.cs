using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IModifiableProposalEntity : IModifiablePublicationEntity
    {
        string Title { get; set; }
        string Slug { get; set; }
        string Description { get; set; }
        string Abstract { get; set; }
        string Content { get; set; }
    }

    public interface IProposalEntity : IModifiableProposalEntity, IPublicationEntity
    {
    }

    public interface IProposalEntity<T> : IModifiableProposalEntity, IPublicationEntity<T>
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
