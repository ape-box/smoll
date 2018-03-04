using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Smoll.Api.Back
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                //.UseKestrel()
                //.UseUrls("http://smoll")
                .Build();
    }
}
