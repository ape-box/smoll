using AutoMapper;
using Commands = Smoll.Messages.Commands;

namespace Smoll.Api.Back.Profiles
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<Controllers.Models.Request.PollRequest, Commands.CreatePoll>();
            CreateMap<Controllers.Models.Request.PollOptionRequest, Commands.CreatePollOption>();
        }
    }
}
