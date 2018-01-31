using System;
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
using Smoll.Data.Entities;
using Smoll.Data.Models.Db;

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
            services.AddTransient<IQueryContext, QueryContext>();
            services.AddTransient<IQueryRepository, QueryRepository>();
            //services.AddTransient<IVoteContext, VoteContext>();
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

            Smoll.Data.Module.Setup();

            services.AddEntityFrameworkNpgsql();
            services.AddDbContext<QueryContext>(ConfigureReadonly);
            //services.AddDbContext<VoteContext>(ConfigureReadonly);

            using (var db = new QueryContext(new DbContextOptionsBuilder<QueryContext>()
                .UseNpgsql(connectionString).Options))
            {
                var model = new Article
                {
                    Abstract = "Abstract",
                    Content = "Content",
                    CreatedBy = "CreatedBy",
                    CreatedDate = DateTime.UtcNow.AddDays(-10),
                    Description = "Description",
                    ExpireDate = DateTime.UtcNow.AddDays(10),
                    ModifiedBy = "ModifiedBy",
                    ModifiedDate = DateTime.UtcNow,
                    PublishDate = DateTime.UtcNow.AddDays(-5),
                    Slug = "Slug",
                    Subtitle = "Subtitle",
                    Title = "Title",
                    Status = PublishStatus.Published,
                    Version = new byte[] { 0 }
                };
                db.Articles.Add(model);
                db.SaveChanges();
            }
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
