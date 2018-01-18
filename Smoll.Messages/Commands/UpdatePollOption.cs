using Smoll.Messages.Contracts;

namespace Smoll.Messages.Commands
{
    public sealed class UpdatePollOption : MessageBase, ICommand
    {
        public string PollOptionId { get; private set; }
        public string DisplayName { get; set; }
        public string Details { get; set; }

        public UpdatePollOption(string pollOptionId)
        {
            this.PollOptionId = pollOptionId;
        }
    }
}
