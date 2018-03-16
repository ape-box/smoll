using System;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using Smoll.Api.Common.Controllers.Models;

namespace Smoll.Api.Common.Controllers
{
    public class ErrorHandler : IExceptionFilter
    {
        public async void OnException(ExceptionContext context)
        {
            var response = context.HttpContext.Response;
            switch (context.Exception)
            {
                case UnauthorizedAccessException _:
                    response.StatusCode = (int)HttpStatusCode.Unauthorized;
                    break;
                case NotImplementedException _:
                    response.StatusCode = (int)HttpStatusCode.NotImplemented;
                    break;
                default:
                case null:
                    response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    break;
            }
            context.ExceptionHandled = true;

            response.ContentType = "application/json";
            await response.WriteAsync(JsonConvert.SerializeObject(new ResponseWrapperModel
            {
                Status = Enum.GetName(typeof(HttpStatusCode), response.StatusCode),
                Errors = new [] { context.Exception?.Message ?? "Internal Server Error." }
            }));
        }
    }
}
