using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IModifiableSuggestionEntity : IModifiablePublicationEntity
    {
        string Title { get; set; }
        string Description { get; set; }
        IEnumerable<IEntityOption<object>> Options { get; set; }
    }

    public interface ISuggestionEntity : IModifiableSuggestionEntity, IPublicationEntity
    {
    }

    public interface ISuggestionEntity<T> : IModifiableSuggestionEntity, IPublicationEntity<T>
    {
    }

    public abstract class SuggestionEntity<T> : PublicationEntity<T>, ISuggestionEntity<T>
    {
        public string Title { get; set; }

        [DataType(DataType.Html)]
        [StringLength(155)]
        public string Description { get; set; }

        public virtual IEnumerable<IEntityOption<object>> Options { get; set; }
    }
}
