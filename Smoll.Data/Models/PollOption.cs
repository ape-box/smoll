using System;

namespace Smoll.Data.Models
{
    public sealed class PollOption
    {
        public Guid PollId { get; set; }
        public int SequenceId { get; set; }
        public string DisplayName { get; set; }
        public string Details { get; set; }
        public int Votes { get; set; }
    }
}
