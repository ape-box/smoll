using Smoll.Messages.Contracts;

namespace Smoll.Messages.Commands
{
    public sealed class DeletePollOption : MessageBase, ICommand
    {
        public string PollOptionId { get; private set; }

        public DeletePollOption(string pollOptionId)
        {
            this.PollOptionId = pollOptionId;
        }
    }
}
