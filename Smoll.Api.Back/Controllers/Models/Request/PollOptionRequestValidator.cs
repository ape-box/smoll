using FluentValidation;

namespace Smoll.Api.Back.Controllers.Models.Request
{
    public class PollOptionRequestValidator : AbstractValidator<PollOptionRequest>
    {
        public PollOptionRequestValidator()
        {
            RuleFor(option => option.DisplayName).NotEmpty();
            RuleFor(option => option.Details).NotEmpty();
        }
    }
}
