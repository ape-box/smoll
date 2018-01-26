using System.Collections.Generic;
using Smoll.Data.Entities;

namespace Smoll.Data.Models
{
    public interface IModifiablePollEntity : IModifiablePublishableEntity
    {
        IEnumerable<IModifiablePollOptionEntity> PollOptions { get; set; }
    }
}
