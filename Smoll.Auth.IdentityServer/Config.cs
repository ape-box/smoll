using System.Collections.Generic;
using IdentityServer4.Models;

namespace Smoll.Auth.IdentityServer
{
    public partial class Config
    {
        public static IEnumerable<ApiResource> GetApiResources()
            => new List<ApiResource>
            {
                new ApiResource(ConfigurationReferences.BackendApi.Name, ConfigurationReferences.BackendApi.DisplayName)
            };

        public static IEnumerable<Client> GetClients()
            => new List<Client>
            {
                new Client
                {
                    ClientId = "client",
                    AllowedGrantTypes = { GrantType.ClientCredentials },
                    ClientSecrets = { new Secret("secret".Sha512()) },
                    //ClientSecrets = { new Secret("secret".Sha256()) },
                    AllowedScopes = { ConfigurationReferences.BackendApi.Name }
                }
            };
    }
}
