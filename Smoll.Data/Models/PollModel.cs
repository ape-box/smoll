using System;
using System.Collections.Generic;

namespace Smoll.Data.Models
{
    public abstract class PollModel : CommonModel<Guid>
    {
        public virtual IEnumerable<PollOption> Options { get; set; }
    }
}
