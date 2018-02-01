using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class PollController : EntityAdminControllerBase<Poll>
    {
        public PollController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
