using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class ProposalsController : EntityAdminControllerBase<Proposal>
    {
        public ProposalsController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
