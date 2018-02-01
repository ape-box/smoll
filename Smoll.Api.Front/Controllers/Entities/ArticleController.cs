using Smoll.Api.Front.Models;
using Smoll.Api.Front.Models.Entities;

namespace Smoll.Api.Front.Controllers.Entities
{
    public class ArticleController : EntityQueryControllerBase<Article>
    {
        public ArticleController(IQueryRepository repository)
            : base(repository)
        {
        }
    }
}
