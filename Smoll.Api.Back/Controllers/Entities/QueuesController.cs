using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class QueuesController : EntityAdminControllerBase<Queue>
    {
        public QueuesController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
