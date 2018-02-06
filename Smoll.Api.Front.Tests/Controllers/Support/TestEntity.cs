using System;
using Smoll.Data.Entities;

namespace Smoll.Api.Front.Tests.Controllers.Support
{
    internal class TestEntity : PublicationEntity<Guid>
    {
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public bool EntityModifiable { get; set; }
        public bool EntityVisible { get; set; }
        public byte[] Version { get; set; }

        public string Name { get; set; }

        public TestEntity(string name)
        {
            Id = Guid.NewGuid();
            CreatedDate = DateTime.UtcNow;
            ModifiedDate = DateTime.UtcNow;
            CreatedBy = "xUnit";
            ModifiedBy = "xUnit";
            Name = name;
        }
    }
}
