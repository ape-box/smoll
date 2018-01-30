using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IModifiableArticleEntity : IModifiablePublicationEntity
    {
        string Title { get; set; }
        string Slug { get; set; }
        string Description { get; set; }
        string Abstract { get; set; }
        string Content { get; set; }
    }

    public interface IArticleEntity : IModifiableArticleEntity, IPublicationEntity
    {
    }

    public interface IArticleEntity<T> : IModifiableArticleEntity, IPublicationEntity<T>
    {
    }

    public abstract class ArticleEntity<T> : PublicationEntity<T>, IArticleEntity<T>
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
