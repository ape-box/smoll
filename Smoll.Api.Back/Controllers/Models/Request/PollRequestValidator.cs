using FluentValidation;

namespace Smoll.Api.Back.Controllers.Models.Request
{
    public class PollRequestValidator : AbstractValidator<PollRequest>
    {
        public PollRequestValidator()
        {
            RuleFor(poll => poll.Name).NotEmpty();
        }
    }
}
