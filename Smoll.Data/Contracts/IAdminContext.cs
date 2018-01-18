using System;
using Smoll.Data.Models;

namespace Smoll.Data.Contracts
{
    public interface IAdminContext
    {
        void Create(PollModel pollModel);

        PollModel Read(Guid pollId);

        PollModel[] ReadAll();

        void Update(PollModel pollModel);

        void Delete(Guid pollId);
    }
}
