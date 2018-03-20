using System;
using System.Threading.Tasks;

namespace Smoll.Cli
{
    using System.Threading;
    using IdentityModel.Client;
    using Newtonsoft.Json.Linq;
    using RestSharp;
    using RestSharp.Authenticators;

    public class Program
    {
        public static async Task Main(string[] args)
        {
            Console.WriteLine("Loading up ...");
            Thread.Sleep(3000);

            var disco = await DiscoveryClient.GetAsync("http://localhost:53052");
            if (disco.IsError)
            {
                Console.WriteLine(disco.Error);
                return;
            }

            var tokenClient = new TokenClient(disco.TokenEndpoint, "client", "secret");
            var tokenResponse = await tokenClient.RequestClientCredentialsAsync("backend");
            if (tokenResponse.IsError)
            {
                Console.WriteLine(tokenResponse.Error);
                return;
            }

            Console.WriteLine(tokenResponse.Json);

            var client = new RestClient("http://localhost:62218");
            client.Authenticator = new JwtAuthenticator(tokenResponse.AccessToken);
            var request = new RestRequest("identity", Method.GET);
            //request.AddHeader("Authorization", $"bearer {tokenResponse.AccessToken}");

            var response = await client.ExecuteTaskAsync(request);
            if (!response.IsSuccessful)
            {
                Console.WriteLine(response.StatusCode);
            }
            else
            {
                Console.WriteLine(JArray.Parse(response.Content));
            }

            Console.ReadLine();
        }
    }
}
