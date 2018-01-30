using Microsoft.EntityFrameworkCore;

namespace Smoll.Data.Contexts
{
    public abstract class PollDbContext : DbContext
    {
        protected PollDbContext(DbContextOptions<PollDbContext> options)
        {
        }
    }
}
