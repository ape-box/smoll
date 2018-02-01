using System;

namespace Smoll.Data.Models
{
    public struct PollId
    {
        public PollId(string pollId)
        {
            this.id = Guid.Parse(pollId);
        }

        public PollId(Guid pollId)
        {
            this.id = pollId;
        }

        private readonly Guid id;

        public static PollId NewId() => new PollId(Guid.NewGuid());
        public static implicit operator Guid(PollId id) => id.id;
        public static explicit operator PollId(Guid id) => new PollId(id);
        public static bool operator !=(PollId left, PollId right) => left.id != right.id;
        public static bool operator ==(PollId left, PollId right) => left.id == right.id;
        public bool Equals(PollId obj) => id.Equals(obj);
        public override bool Equals(object obj) => obj is PollId && Equals(obj);
        public override int GetHashCode() => id.GetHashCode();
        public override string ToString() => id.ToString();
    }
}
