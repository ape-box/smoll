using Smoll.Api.Front.Models;
using Smoll.Api.Front.Models.Entities;

namespace Smoll.Api.Front.Controllers.Entities
{
    public class PollController : EntityQueryControllerBase<Poll>
    {
        public PollController(IQueryRepository repository)
            : base(repository)
        {
        }
    }
}
