using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Smoll.Data.Contracts;

namespace Smoll.Api.Front.Controllers
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
        public async Task<IActionResult> Put(Guid pollId, int sequenceId)
        {
            voteContext.Vote(pollId, sequenceId);
            return Ok();
        }
    }
}
