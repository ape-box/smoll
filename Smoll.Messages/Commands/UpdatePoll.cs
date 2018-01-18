using System;
using Smoll.Messages.Contracts;

namespace Smoll.Messages.Commands
{
    public sealed class UpdatePoll : MessageBase, ICommand
    {
        public Guid PollId { get; private set; }
        public string Name { get; set; }

        public UpdatePoll(Guid pollId)
        {
            this.PollId = pollId;
        }
    }
}
