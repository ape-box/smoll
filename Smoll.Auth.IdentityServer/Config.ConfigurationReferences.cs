namespace Smoll.Auth.IdentityServer
{
    public partial class Config
    {
        private abstract class ConfigurationReferences
        {
            public abstract string Name { get; }
            public abstract string DisplayName { get; }

            public static ConfigurationReferences BackendApi { get; } = new BackendResource();

            private class BackendResource : ConfigurationReferences
            {
                public override string Name { get; } = "backend";
                public override string DisplayName { get; } = "Smoll BackendResource API";
            }
        }
    }
}
