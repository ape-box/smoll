using Smoll.Messages.Contracts;

namespace Smoll.Messages.Commands
{
    public sealed class CreatePollOption : MessageBase, ICommand
    {
        public string DisplayName { get; private set; }
        public string Details { get; private set; }

        public CreatePollOption(string displayName, string details)
        {
            this.DisplayName = displayName;
            this.Details = details;
        }
    }
}
