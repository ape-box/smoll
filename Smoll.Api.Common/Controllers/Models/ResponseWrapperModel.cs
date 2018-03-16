namespace Smoll.Api.Common.Controllers.Models
{
    public class ResponseWrapperModel
    {
        public string Status { get; set; }
        public string[] Errors { get; set; }
        public object Data { get; set; }
    }
}
