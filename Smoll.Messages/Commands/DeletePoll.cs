using System;
using Smoll.Messages.Contracts;

namespace Smoll.Messages.Commands
{
    public sealed class DeletePoll : MessageBase, ICommand
    {
        public Guid PollId { get; private set; }

        public DeletePoll(Guid pollId)
        {
            this.PollId = pollId;
        }
    }
}
