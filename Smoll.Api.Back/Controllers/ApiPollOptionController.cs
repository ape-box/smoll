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
    public class ApiPollOptionController : Controller
    {
        private readonly IMapper mapper;
        private readonly ICommandBroker broker;

        public ApiPollOptionController(IMapper mapper, ICommandBroker broker)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.broker = broker ?? throw new ArgumentNullException(nameof(broker));
        }

        [HttpPost]
        [Route("{pollId}/option")]
        public async Task<IActionResult> Post([FromBody]PollOptionRequest pollOptionRequest)
        {
            broker.Send(mapper.Map<CreatePollOption>(pollOptionRequest));
            return Ok();
        }

        [HttpPut]
        [Route("{pollId}/option/{sequenceId}")]
        public async Task<IActionResult> Put(Guid pollId, int sequenceId, [FromBody]PollOptionRequest pollOptionRequest)
        {
            broker.Send(
                mapper.Map(pollOptionRequest, new UpdatePollOption($"{pollId}, {sequenceId}"), typeof(PollOptionRequest), typeof(UpdatePollOption)) as UpdatePollOption);
            return Ok();
        }

        [HttpDelete]
        [Route("{pollId}/option/{sequenceId}")]
        public async Task<IActionResult> Delete(Guid pollId, int sequenceId)
        {
            broker.Send(new DeletePollOption($"{pollId}, {sequenceId}"));
            return Ok();
        }
    }
}
