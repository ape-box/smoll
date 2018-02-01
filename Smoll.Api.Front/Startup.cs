using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Smoll.Api.Common.Controllers.Models.Validation;
using Smoll.Api.Front.Models;

namespace Smoll.Api.Front
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
            services.AddTransient<IQueryRepository, QueryRepository>();
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
            var connectionString = Configuration.GetConnectionString("ApplicationDbContext");
            void ConfigureReadonly(DbContextOptionsBuilder options)
                => options
                    .UseNpgsql(connectionString)
                    .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);

            services.AddEntityFrameworkNpgsql();
            services.AddDbContext<ApplicationContext>(ConfigureReadonly);
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper();

            InitializeMVC(services);

            InitializeDatabase(services);

            InitializeDIMappings(services);
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
