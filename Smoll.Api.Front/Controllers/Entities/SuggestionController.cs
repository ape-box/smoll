using Smoll.Api.Front.Models;
using Smoll.Api.Front.Models.Entities;

namespace Smoll.Api.Front.Controllers.Entities
{
    public class SuggestionController : EntityQueryControllerBase<Suggestion>
    {
        public SuggestionController(IQueryRepository repository)
            : base(repository)
        {
        }
    }
}
