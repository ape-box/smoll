using Smoll.Api.Front.Models;
using Smoll.Api.Front.Models.Entities;

namespace Smoll.Api.Front.Controllers.Entities
{
    public class QueueController : EntityQueryControllerBase<Queue>
    {
        public QueueController(IQueryRepository repository)
            : base(repository)
        {
        }
    }
}
