using Npgsql;
using Smoll.Data.Entities;

namespace Smoll.Data
{
    public class Module
    {
        public static void Setup()
        {
            // Not relying on postgresql enum types atm
            //NpgsqlConnection.MapEnumGlobally<PublishStatus>();
        }
    }
}
