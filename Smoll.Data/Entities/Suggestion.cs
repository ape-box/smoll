using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface ISuggestionEntity : IPublicationEntity
    {
    }

    public interface ISuggestionEntity<T> : IPublicationEntity<T>
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
