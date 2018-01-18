using System;

namespace Smoll.Data.Models
{
    public sealed class PollModel
    {
        public Guid PollId { get; set; }
        public string Name { get; set; }
        public PollOption[] PollOptions { get; set; }
    }
}
