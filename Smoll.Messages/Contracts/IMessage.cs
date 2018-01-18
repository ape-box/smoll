using System;

namespace Smoll.Messages.Contracts
{
    public interface IMessage
    {
        Guid MessageId { get; }
        DateTime TimeStampUtc { get; }
    }
}
