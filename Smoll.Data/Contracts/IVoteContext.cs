using System;

namespace Smoll.Data.Contracts
{
    public interface IVoteContext
    {
        void Vote(Guid pollId, int sequenceId);
    }
}
