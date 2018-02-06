using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Smoll.Api.Back.Models;
using Smoll.Api.Back.Tests.Controllers.Support;
using Xunit;

namespace Smoll.Api.Back.Tests.Controllers
{
    public class EntityAdminControllerBase_Test
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

        private Mock<IAdminRepository> AdminRepoPaged
        {
            get
            {
                var repo = new Mock<IAdminRepository>();
                repo.Setup(t => t.GetOrderedPageAsync<TestEntity>(It.IsAny<(int? pageNumber, int? pageSize)>()))
                    .Returns<(int? pageNumber, int? pageSize)>(pagination => Task.FromResult(DefaultTestEntitySet
                        .Skip(pagination.pageSize.Value * (pagination.pageNumber.Value - 1))
                        .Take(pagination.pageSize.Value)));

                return repo;
            }
        }

        [Fact]
        public async Task EntityAdminControllerBase_SupportsResourceIndex()
        {
            var repoMock = new Mock<IAdminRepository>();
            var controller = new TestController(repoMock.Object);

            var response = await controller.Get(null, null);

            Assert.IsType<OkObjectResult>(response);
            Assert.IsAssignableFrom<IEnumerable<TestEntity>>((response as OkObjectResult)?.Value);
        }

        [Fact]
        public async Task EntityAdminControllerBase_ResourceIndex_ReturnData()
        {
            var repoMock = AdminRepoPaged;
            var controller = new TestController(repoMock.Object);

            var response = await controller.Get(null, null);
            var values = (response as OkObjectResult)?.Value as IEnumerable<TestEntity>;

            Assert.Equal(DefaultTestEntitySet.Take(5), values);
            repoMock.VerifyAll();
        }

        [Fact]
        public async Task EntityAdminControllerBase_ResourceIndex_SupportsPagination()
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
        public async Task EntityAdminControllerBase_ResourceIndex_RestrictsPagination(int page, int size)
        {
            var repoMock = AdminRepoPaged;
            var controller = new TestController(repoMock.Object);

            var response = await controller.Get(page, size);
            var values = ((response as OkObjectResult)?.Value as IEnumerable<TestEntity>)?.ToArray();

            Assert.Equal(5, values?.Count());
            Assert.Equal(DefaultTestEntitySet.Take(5), values);
        }

        [Fact]
        public async Task EntityAdminControllerBase_Create_InsertEntity()
        {
            var storage = new List<TestEntity>();
            var entity = DefaultTestEntitySet.Last();
            var repoMock = new Mock<IAdminRepository>();
            repoMock
                .Setup(t => t.Create<TestEntity>(entity, It.IsAny<string>()))
                .Callback<TestEntity, string>((t, _) => storage.Add(t))
                .Returns<TestEntity, string>((t, _) => repoMock.Object);
            repoMock
                .Setup(t => t.SaveAsync())
                .Returns(Task.FromResult(1));

            var controller = new TestController(repoMock.Object);

            var response = await controller.Post(entity);
            var value = (response as OkObjectResult)?.Value as int?;

            Assert.Equal(1, value);
            Assert.Equal(entity, storage.FirstOrDefault());
            repoMock.VerifyAll();
        }

        [Fact]
        public async Task EntityAdminControllerBase_Read_ReturnEntity()
        {
            var repoMock = new Mock<IAdminRepository>();
            repoMock.Setup(t => t.GetByIdAsync<TestEntity>(It.IsAny<Guid>()))
                .Returns<Guid>(id => Task.FromResult(DefaultTestEntitySet.FirstOrDefault(t => t.Id == id)));

            var controller = new TestController(repoMock.Object);
            var entity = DefaultTestEntitySet.Last();

            var response = await controller.Get(entity.Id);
            var value = (response as OkObjectResult)?.Value as TestEntity;

            Assert.Equal(entity, value);
        }

        [Fact]
        public async Task EntityAdminControllerBase_Update_AlterEntity()
        {
            var repoMock = new Mock<IAdminRepository>();
            repoMock
                .Setup(t => t.Update<TestEntity>(It.IsAny<Guid>(), It.IsAny<TestEntity>(), It.IsAny<string>()))
                .Returns<Guid, TestEntity, string>((a, b, c) => repoMock.Object);
            repoMock
                .Setup(t => t.SaveAsync())
                .Returns(Task.FromResult(1));

            var controller = new TestController(repoMock.Object);

            var response = await controller.Put(Guid.NewGuid(), default(TestEntity));
            var value = (response as OkObjectResult)?.Value as int?;

            Assert.Equal(1, value);
            repoMock.VerifyAll();
        }

        [Fact]
        public async Task EntityAdminControllerBase_Delete_DisableEntity()
        {
            var repoMock = new Mock<IAdminRepository>();
            repoMock
                .Setup(t => t.DisableEntity<TestEntity>(It.IsAny<Guid>(), It.IsAny<string>()))
                .Returns<Guid, string>((a, b) => repoMock.Object);
            repoMock
                .Setup(t => t.SaveAsync())
                .Returns(Task.FromResult(1));

            var controller = new TestController(repoMock.Object);

            var response = await controller.Delete(Guid.NewGuid());
            var value = (response as OkObjectResult)?.Value as int?;

            Assert.Equal(1, value);
            repoMock.VerifyAll();
            repoMock.Verify(t => t.Delete<TestEntity>(It.IsAny<object>()), Times.Never);
        }
    }
}
