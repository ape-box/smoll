using Microsoft.EntityFrameworkCore;
using Smoll.Data.Models;

namespace Smoll.Data.Contexts
{
    public abstract class PollDbContext : DbContext
    {
        protected  virtual DbSet<PollModel> PollModels { get; set; }

        protected PollDbContext(DbContextOptions<PollDbContext> options)
        {
        }
    }
}
