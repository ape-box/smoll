using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Smoll.Api.Common.Controllers.Models.Validation;
using Smoll.Data.Contexts;
using Smoll.Data.Contracts;
using Smoll.Messages.Brokers;

namespace Smoll.Api.Back
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private void InitializeDIMappings(IServiceCollection services)
        {
            services.AddTransient<ICommandBroker, CommandBroker>();
            services.AddTransient<IAdminContext, AdminContext>();
            services.AddTransient<IQueryContext, QueryContext>();
            services.AddTransient<IVoteContext, VoteContext>();
        }

        private void InitializeMVC(IServiceCollection services)
        {
            void ConfigureMVC(MvcOptions options)
                => options.Filters.Add(typeof(ValidateModelAttribute));

            void ConfigureValidators(FluentValidationMvcConfiguration config)
                => config.RegisterValidatorsFromAssemblyContaining<Startup>();

            services.AddMvc(ConfigureMVC)
                .AddFluentValidation(ConfigureValidators);
        }

        private void InitializeDatabase(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("PollDbContext");
            services.AddEntityFrameworkNpgsql();
            services.AddDbContext<PollDbContext>(options => options.UseNpgsql(connectionString));
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper();

            InitializeDIMappings(services);

            InitializeMVC(services);

            InitializeDatabase(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
