using Microsoft.EntityFrameworkCore;

namespace Smoll.Data.Contexts
{
    using Smoll.Data.Models.Db;

    public class ArticleContext : DbContext
    {
        protected virtual DbSet<Article> Articles { get; set; }

        protected ArticleContext(DbContextOptions<PollDbContext> options)
        {
        }
    }
}
