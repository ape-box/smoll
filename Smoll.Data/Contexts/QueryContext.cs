using System;
using System.Linq;
using Smoll.Data.Contracts;
using Smoll.Data.Models;

namespace Smoll.Data.Contexts
{
    public class QueryContext : PollDbContext, IQueryContext
    {
        public PollModel Read(Guid pollId)
            => PollModels.FirstOrDefault(t => t.PollId == pollId);

        public PollModel[] ReadAll()
            => PollModels.ToArray();
    }
}
