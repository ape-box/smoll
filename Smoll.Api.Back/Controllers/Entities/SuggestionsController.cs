using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class SuggestionsController : EntityAdminControllerBase<Suggestion>
    {
        public SuggestionsController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
