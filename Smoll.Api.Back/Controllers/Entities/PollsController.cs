using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class PollsController : EntityAdminControllerBase<Poll>
    {
        public PollsController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
