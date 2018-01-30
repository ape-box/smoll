using Npgsql;
using Smoll.Data.Entities;

namespace Smoll.Data
{
    public class Module
    {
        public static void Setup()
        {
            NpgsqlConnection.MapEnumGlobally<PublishStatus>();
        }
    }
}
