using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class QueueController : EntityAdminControllerBase<Queue>
    {
        public QueueController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
