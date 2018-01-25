using Smoll.Messages.Contracts;

namespace Smoll.Messages.Brokers
{
    public interface ICommandBroker
    {
        void Send(ICommand command);
    }
}
