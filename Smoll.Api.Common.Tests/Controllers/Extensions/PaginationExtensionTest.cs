using Smoll.Api.Common.Controllers.Extensions;
using Xunit;

namespace Smoll.Api.Common.Tests.Controllers.Extensions
{
    public class PaginationExtensionTest
    {
        [Theory]
        [InlineData(1, 1)]
        [InlineData(999, 100)]
        public void PaginationExtension_RestrictPagination_ValuesRange(int? page, int? size)
        {
            var (pageNumber, pageSize) = PaginationExtension.RestrictPagination(null, page, size);
            Assert.Equal(page, pageNumber);
            Assert.Equal(size, pageSize);
        }

        [Theory]
        [InlineData(-1, 5)]
        [InlineData(0, 5)]
        [InlineData(1, -1)]
        [InlineData(1, 0)]
        [InlineData(1, 101)]
        public void PaginationExtension_RestrictPagination_InvalidValuesRange(int page, int size)
        {
            var (pageNumber, pageSize) = PaginationExtension.RestrictPagination(null, page, size);
            Assert.Equal(1, pageNumber);
            Assert.Equal(5, pageSize);
        }
    }
}
