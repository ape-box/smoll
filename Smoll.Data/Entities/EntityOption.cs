using System.ComponentModel.DataAnnotations;

namespace Smoll.Data.Entities
{
    public interface IEntityOption : IEntity
    {
    }

    public interface IEntityOption<T> : IEntity<T>
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
