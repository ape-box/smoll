using System;
using Smoll.Messages.Contracts;

namespace Smoll.Messages.Commands
{
    public sealed class VotePoll : MessageBase, ICommand
    {
        public Guid PollId { get; private set; }
        public int PollOptionSequenceId { get; private set; }

        public VotePoll(Guid pollId, int pollOptionSequenceId)
        {
            this.PollId = pollId;
            this.PollOptionSequenceId = pollOptionSequenceId;
        }
    }
}
