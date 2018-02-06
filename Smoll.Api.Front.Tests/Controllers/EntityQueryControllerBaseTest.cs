using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Smoll.Api.Front.Models;
using Smoll.Api.Front.Tests.Controllers.Support;
using Xunit;

namespace Smoll.Api.Front.Tests.Controllers
{
    public class EntityQueryControllerBase_Test
    {
        private static readonly IEnumerable<TestEntity> DefaultTestEntitySet = new[]
        {
            new TestEntity("Foo0"),
            new TestEntity("Foo1"),
            new TestEntity("Foo2"),
            new TestEntity("Foo3"),
            new TestEntity("Foo4"),
            new TestEntity("Foo5"),
            new TestEntity("Foo6"),
            new TestEntity("Foo7")
        };

        private Mock<IQueryRepository> AdminRepoPaged
        {
            get
            {
                var repo = new Mock<IQueryRepository>();
                repo.Setup(t => t.GetOrderedPageAsync<TestEntity>(It.IsAny<(int? pageNumber, int? pageSize)>()))
                    .Returns<(int? pageNumber, int? pageSize)>(pagination => Task.FromResult(DefaultTestEntitySet
                        .Skip(pagination.pageSize.Value * (pagination.pageNumber.Value - 1))
                        .Take(pagination.pageSize.Value)));

                return repo;
            }
        }

        [Fact]
        public async Task EntityQueryControllerBase_SupportsResourceIndex()
        {
            var repoMock = new Mock<IQueryRepository>();
            var controller = new TestController(repoMock.Object);

            var response = await controller.Get(null, null);

            Assert.IsType<OkObjectResult>(response);
            Assert.IsAssignableFrom<IEnumerable<TestEntity>>((response as OkObjectResult)?.Value);
        }

        [Fact]
        public async Task EntityQueryControllerBase_ResourceIndex_ReturnData()
        {
            var repoMock = AdminRepoPaged;
            var controller = new TestController(repoMock.Object);

            var response = await controller.Get(null, null);
            var values = (response as OkObjectResult)?.Value as IEnumerable<TestEntity>;

            Assert.Equal(DefaultTestEntitySet.Take(5), values);
            repoMock.VerifyAll();
        }

        [Fact]
        public async Task EntityQueryControllerBase_ResourceIndex_SupportsPagination()
        {
            var repoMock = AdminRepoPaged;
            var controller = new TestController(repoMock.Object);

            var response = await controller.Get(1, 5);
            var values = ((response as OkObjectResult)?.Value as IEnumerable<TestEntity>)?.ToArray();

            Assert.Equal(5, values?.Count());
            Assert.Equal(DefaultTestEntitySet.Take(5), values);
        }

        [Theory]
        [InlineData(-1, 5)]
        [InlineData(0, 5)]
        [InlineData(1, -1)]
        [InlineData(1, 0)]
        [InlineData(1, 101)]
        public async Task EntityQueryControllerBase_ResourceIndex_RestrictsPagination(int page, int size)
        {
            var repoMock = AdminRepoPaged;
            var controller = new TestController(repoMock.Object);

            var response = await controller.Get(page, size);
            var values = ((response as OkObjectResult)?.Value as IEnumerable<TestEntity>)?.ToArray();

            Assert.Equal(5, values?.Count());
            Assert.Equal(DefaultTestEntitySet.Take(5), values);
        }
    }
}
