using System;
using System.Linq;
using Smoll.Data.Contracts;
using Smoll.Data.Models;

namespace Smoll.Data.Contexts
{
    public class AdminContext : PollDbContext, IAdminContext
    {
        public void Create(PollModel pollModel)
            => PollModels.Add(pollModel);

        public PollModel Read(Guid pollId)
            => PollModels.FirstOrDefault(t => t.PollId == pollId);

        public PollModel[] ReadAll()
            => PollModels.ToArray();

        public void Update(PollModel pollModel)
        {
            var oldModel = PollModels.First(t => t.PollId == pollModel.PollId);
            if (PollModels.Remove(oldModel))
            {
                PollModels.Add(pollModel);
            }
        }

        public void Delete(Guid pollId)
            => PollModels.Remove(PollModels.First(t => t.PollId == pollId));
    }
}
