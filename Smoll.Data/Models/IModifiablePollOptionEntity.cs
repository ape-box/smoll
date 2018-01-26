using System;

namespace Smoll.Data.Models
{
    public interface IModifiablePollOptionEntity
    {
        Guid PollId { get; set; }
        int SequenceId { get; set; }
        string DisplayName { get; set; }
        string Details { get; set; }
        int Votes { get; set; }
    }
}
