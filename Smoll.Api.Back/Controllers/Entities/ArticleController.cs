using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class ArticleController : EntityAdminControllerBase<Article>
    {
        public ArticleController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
