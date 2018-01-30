using Microsoft.EntityFrameworkCore;
using Smoll.Data.Contracts;

namespace Smoll.Data.Contexts
{
    public class AdminContext : DbContext, IAdminContext
    {
        public AdminContext(DbContextOptions<AdminContext> options)
        {
        }
    }
}
