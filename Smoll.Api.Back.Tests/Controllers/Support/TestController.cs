using Smoll.Api.Back.Controllers;
using Smoll.Api.Back.Models;

namespace Smoll.Api.Back.Tests.Controllers.Support
{
    internal class TestController : EntityAdminControllerBase<TestEntity>
    {
        public TestController(IAdminRepository repository) : base(repository)
        {
        }
    }
}
