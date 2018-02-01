using Smoll.Api.Front.Models;
using Smoll.Api.Front.Models.Entities;

namespace Smoll.Api.Front.Controllers.Entities
{
    public class ProposalController : EntityQueryControllerBase<Proposal>
    {
        public ProposalController(IQueryRepository repository)
            : base(repository)
        {
        }
    }
}
