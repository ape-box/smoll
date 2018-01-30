using System;
using Smoll.Data.Entities;

namespace Smoll.Data.Models.View
{
    public class Article : IModifiableArticleEntity
    {
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public string Abstract { get; set; }
        public string Content { get; set; }
        public PublishStatus Status { get; set; }
        public DateTime? PublishDate { get; set; }
        public DateTime? ExpireDate { get; set; }
    }
}
