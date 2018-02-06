using Smoll.Api.Front.Controllers;
using Smoll.Api.Front.Models;

namespace Smoll.Api.Front.Tests.Controllers.Support
{

    internal class TestController : EntityQueryControllerBase<TestEntity>
    {
        public TestController(IQueryRepository repository) : base(repository)
        {
        }
    }
}
