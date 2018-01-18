using System;
using Microsoft.AspNetCore.Mvc;
using Smoll.Data.Contracts;

namespace Smoll.Api.Back.Controllers
{
    [Route("api/v1/[controller]")]
    public class VoteController : Controller
    {
        private readonly IVoteContext voteContext;

        public VoteController(IVoteContext voteContext)
        {
            this.voteContext = voteContext ?? throw new ArgumentNullException(nameof(voteContext));
        }

        [HttpPut("{pollId}")]
        public void Put(Guid pollId, int sequenceId)
            => voteContext.Vote(pollId, sequenceId);
    }
}
