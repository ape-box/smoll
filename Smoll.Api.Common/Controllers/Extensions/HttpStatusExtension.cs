namespace Smoll.Api.Common.Controllers.Extensions
{
    using System;
    using System.Net;

    public static class HttpStatusExtension
    {
        public static string StringRepresentation(this HttpStatusCode stats)
            => Enum.GetName(typeof(HttpStatusCode), stats);
    }
}
