using Microsoft.EntityFrameworkCore;
using Smoll.Data.Contracts;

namespace Smoll.Data.Contexts
{
    public class VoteContext : PollDbContext, IVoteContext
    {
        public VoteContext(DbContextOptions<PollDbContext> options) : base(options) { }
    }
}
