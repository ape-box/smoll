using Smoll.Messages.Contracts;

namespace Smoll.Api.Common.Brokers
{
    public interface ICommandBroker
    {
        void Send(ICommand command);
    }
}
