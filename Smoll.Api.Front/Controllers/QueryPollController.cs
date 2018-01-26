using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Smoll.Data.Contracts;

namespace Smoll.Api.Front.Controllers
{
    [Route("api/v1/poll")]
    public class QueryPollController : Controller
    {
        private readonly IQueryContext queryContext;

        public QueryPollController(IQueryContext queryContext)
        {
            this.queryContext = queryContext ?? throw new ArgumentNullException(nameof(queryContext));
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok();
        }

        [HttpGet("{pollId}")]
        public async Task<IActionResult> Get(Guid pollId)
        {
            return Ok();
        }
    }
}
