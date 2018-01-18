using System;
using Smoll.Messages.Contracts;

namespace Smoll.Messages
{
    public abstract class MessageBase : IMessage
    {
        public Guid MessageId { get; } = Guid.NewGuid();
        public DateTime TimeStampUtc { get; } = DateTime.UtcNow;
    }
}
