using Smoll.Api.Back.Models;
using Smoll.Api.Back.Models.Entities;

namespace Smoll.Api.Back.Controllers.Entities
{
    public class ArticlesController : EntityAdminControllerBase<Article>
    {
        public ArticlesController(IAdminRepository repository)
            : base(repository)
        {
        }
    }
}
