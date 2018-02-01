using Microsoft.EntityFrameworkCore;
using Smoll.Api.Front.Models.Entities;

namespace Smoll.Api.Front
{
    public class ApplicationContext : DbContext
    {
        public virtual DbSet<Article> Articles { get; set; }
        public virtual DbSet<Poll> Polls { get; set; }
        public virtual DbSet<PollOption> PollOptions { get; set; }
        public virtual DbSet<Proposal> Proposals { get; set; }
        public virtual DbSet<Queue> Queues { get; set; }
        public virtual DbSet<QueueOption> QueueOptions { get; set; }
        public virtual DbSet<Suggestion> Suggestions { get; set; }
        public virtual DbSet<SuggestionOption> SuggestionOptions { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Poll>()
                .Ignore(t => t.Options);

            modelBuilder.Entity<Queue>()
                .Ignore(t => t.Options);

            modelBuilder.Entity<Suggestion>()
                .Ignore(t => t.Options);
        }
    }
}
