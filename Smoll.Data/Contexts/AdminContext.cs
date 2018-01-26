using Microsoft.EntityFrameworkCore;
using Smoll.Data.Contracts;

namespace Smoll.Data.Contexts
{
    public class AdminContext : PollDbContext, IAdminContext
    {
        public AdminContext(DbContextOptions<PollDbContext> options) : base(options) { }
    }
}
