using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Smoll.Api.Back.Controllers.Models.Request;
using Smoll.Messages.Commands;

namespace Smoll.Api.Back.Controllers
{
    using Smoll.Messages.Brokers;

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
        public void Post([FromBody]PollRequest pollRequest)
            => broker.Send(mapper.Map<CreatePoll>(pollRequest));

        [HttpPut("{pollId}")]
        public void Put(Guid pollId, [FromBody]PollRequest pollRequest)
            => broker.Send(
                mapper.Map(pollRequest, new UpdatePoll(pollId), typeof(PollRequest), typeof(UpdatePoll)) as UpdatePoll);

        [HttpDelete("{pollId}")]
        public void Delete(Guid pollId)
            => broker.Send(new DeletePoll(pollId));
    }
}
