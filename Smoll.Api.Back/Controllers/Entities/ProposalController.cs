using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class ProposalController : EntityAdminControllerBase<Proposal>
    {
        public ProposalController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
