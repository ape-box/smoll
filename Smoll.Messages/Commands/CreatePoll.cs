using Smoll.Messages.Contracts;

namespace Smoll.Messages.Commands
{
    public sealed class CreatePoll : MessageBase, ICommand
    {
        public string Name { get; private set; }

        public CreatePoll(string name)
        {
            this.Name = name;
        }
    }
}
