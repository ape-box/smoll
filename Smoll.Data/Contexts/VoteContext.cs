using System;
using System.Linq;
using Smoll.Data.Contracts;

namespace Smoll.Data.Contexts
{
    public class VoteContext : PollDbContext, IVoteContext
    {
        public void Vote(Guid pollId, int sequenceId)
        {
            var model = PollModels.First(t => t.PollId == pollId);
            var option = model.PollOptions.First(t => t.SequenceId == sequenceId);
            option.Votes += 1;
        }
    }
}
