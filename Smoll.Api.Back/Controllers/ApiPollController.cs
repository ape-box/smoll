using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Smoll.Api.Back.Controllers.Models.Request;
using Smoll.Messages.Brokers;
using Smoll.Messages.Commands;

namespace Smoll.Api.Back.Controllers
{
    [Route("api/v1/poll")]
    public class ApiPollController : Controller
    {
        private readonly IMapper mapper;
        private readonly ICommandBroker broker;

        public ApiPollController(IMapper mapper, ICommandBroker broker)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.broker = broker ?? throw new ArgumentNullException(nameof(broker));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PollRequest pollRequest)
        {
            broker.Send(mapper.Map<CreatePoll>(pollRequest));
            return Ok();
        }

        [HttpPut("{pollId}")]
        public async Task<IActionResult> Put(Guid pollId, [FromBody]PollRequest pollRequest)
        {
            broker.Send(
                mapper.Map(pollRequest, new UpdatePoll(pollId), typeof(PollRequest), typeof(UpdatePoll)) as UpdatePoll);
            return Ok();
        }

        [HttpDelete("{pollId}")]
        public async Task<IActionResult> Delete(Guid pollId)
        {
            broker.Send(new DeletePoll(pollId));
            return Ok();
        }
    }
}
