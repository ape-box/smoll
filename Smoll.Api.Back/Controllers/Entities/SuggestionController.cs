using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class SuggestionController : EntityAdminControllerBase<Suggestion>
    {
        public SuggestionController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
