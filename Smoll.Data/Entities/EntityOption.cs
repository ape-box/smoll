using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IModifiableEntityOption : IModifiableEntity
    {
        int SequenceId { get; set; }
        string DisplayName { get; set; }
        string Details { get; set; }
    }

    public interface IEntityOption : IModifiableEntityOption, IEntity
    {
    }

    public interface IEntityOption<T> : IModifiableEntityOption, IEntity<T>
    {
    }

    public abstract class EntityOption<T> : Entity<T>, IEntityOption<T>
    {
        [Required]
        public int SequenceId { get; set; }

        [StringLength(155)]
        public string DisplayName { get; set; }

        [DataType(DataType.MultilineText)]
        [StringLength(155)]
        public string Details { get; set; }
    }
}
