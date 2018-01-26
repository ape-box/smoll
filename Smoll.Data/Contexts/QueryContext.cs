using Microsoft.EntityFrameworkCore;
using Smoll.Data.Contracts;

namespace Smoll.Data.Contexts
{
    public class QueryContext : PollDbContext, IQueryContext
    {
        public QueryContext(DbContextOptions<PollDbContext> options) : base(options) { }
    }
}
