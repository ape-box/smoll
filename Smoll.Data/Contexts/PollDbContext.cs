using System.Collections.Generic;
using Smoll.Data.Models;

namespace Smoll.Data.Contexts
{
    public abstract class PollDbContext
    {
        protected static IList<PollModel> PollModels { get; } = new List<PollModel>();
    }
}
