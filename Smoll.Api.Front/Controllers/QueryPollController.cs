using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Smoll.Data.Contracts;
using Smoll.Data.Models;

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
        public IEnumerable<PollModel> Get()
            => queryContext.ReadAll();

        [HttpGet("{pollId}")]
        public PollModel Get(Guid pollId)
            => queryContext.Read(pollId);
    }
}
