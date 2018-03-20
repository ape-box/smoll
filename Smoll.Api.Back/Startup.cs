using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Smoll.Api.Back.Models;
using Smoll.Api.Common.Controllers;
using Smoll.Api.Common.Controllers.Models.Validation;
//using Smoll.Messages.Brokers;

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
//            services.AddTransient<ICommandBroker, CommandBroker>();
            services.AddTransient<IAdminRepository, AdminRepository>();
        }

        private void InitializeMVC(IServiceCollection services)
        {
            void ConfigureMVC(MvcOptions options)
            {
                options.Filters.Add(typeof(ErrorHandler));
                options.Filters.Add(typeof(ValidateModelAttribute));
            }

            void ConfigureValidators(FluentValidationMvcConfiguration config)
                => config.RegisterValidatorsFromAssemblyContaining<Startup>();

            // https://offering.solutions/blog/articles/2017/02/07/difference-between-addmvc-addmvcore/
            services.AddMvc(ConfigureMVC)
                .AddFluentValidation(ConfigureValidators);
            //services.AddMvcCore(ConfigureMVC)
            //    .AddAuthorization()
            //    .AddFluentValidation(ConfigureValidators)
            //    .AddJsonFormatters();
        }

        private void InitializeMVCSecurity(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                //options.AddPolicy("AllowSpecificOrigin",
                //    builder => builder.WithOrigins("http://localhost:60067")
                options.AddPolicy("AllowAllOrigins",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
                /*.WithOrigins("http://example.com")
               .AllowAnyMethod();*/
            });

            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = "http://localhost:53052";
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "backend";
                });
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

            InitializeDIMappings(services);

            InitializeMVC(services);

            InitializeMVCSecurity(services);

            InitializeDatabase(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                //app.UseDeveloperExceptionPage();
                app.UseCors("AllowAllOrigins");
            }
            else
            {
                app.UseCors("AllowSpecificOrigin");
            }

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
