using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Smoll.Data.Contexts;
using Smoll.Data.Models.Db;

namespace Smoll.Api.Front.Controllers
{
    [Route("api/v1/poll")]
    public class QueryPollController : Controller
    {
        private readonly IQueryRepository repository;

        public QueryPollController(IQueryRepository repository)
        {
            this.repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        //[HttpGet]
        //public async Task<IActionResult> Get(int pageNumber = 1, int pageSize = 5)
        //{
        //    var models = await repository.GetOrderedPageAsync<Article>();
        //    return Ok(models);
        //}

        [HttpGet]
        public async Task<IActionResult> Get2(int? pageNumber, int? pageSize)
            => Ok(await repository.GetOrderedPageAsync<Article>(
                pageNumber ?? repository.DefaultPageNumber,
                pageSize ?? repository.DefaultPageSize));

        [HttpGet("{pollId}")]
        public async Task<IActionResult> Get(Guid pollId)
        {
            var viewModel = await repository.GetByIdAsync<Article>(pollId);
            return Ok(viewModel);
        }
    }
}
