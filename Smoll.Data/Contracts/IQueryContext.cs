using System;
using Smoll.Data.Models;

namespace Smoll.Data.Contracts
{
    public interface IQueryContext
    {
        PollModel Read(Guid pollId);

        PollModel[] ReadAll();
    }
}
