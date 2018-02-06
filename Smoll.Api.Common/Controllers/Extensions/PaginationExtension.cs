using Microsoft.AspNetCore.Mvc;

namespace Smoll.Api.Common.Controllers.Extensions
{
    public static class PaginationExtension
    {
        public const int MinPageNumber = 1;
        public const int MinPageSize = 1;
        public const int MaxPageSize = 100;
        public const int DefaultPageNumber = 1;
        public const int DefaultPageSize = 5;

        public static (int pageNumber, int pageSize) RestrictPagination(this Controller controller, int? pageNumber, int? pageSize)
        {
            if (!pageNumber.HasValue || pageNumber.Value < MinPageNumber)
            {
                pageNumber = DefaultPageNumber;
            }
            if (!pageSize.HasValue || pageSize.Value < MinPageSize || pageSize.Value > MaxPageSize)
            {
                pageSize = DefaultPageSize;
            }

            return (pageNumber.Value, pageSize.Value);
        }
    }
}
