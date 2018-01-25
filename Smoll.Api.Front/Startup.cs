using System;
using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Smoll.Api.Common.Controllers.Models.Validation;
using Smoll.Data.Contexts;
using Smoll.Data.Contracts;
using Smoll.Data.Models;

namespace Smoll.Api.Front
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper();
            services.AddMvc(ConfigureMVC)
                .AddFluentValidation(ConfigureValidators);

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

            InitializeDatabase();
        }

        private void InitializeDatabase()
        {
            SetupDbContext.AddInitialData(new PollModel
            {
                Name = "Name12",
                PollId = new PollId(Guid.NewGuid()),
                PollOptions = new[]
                {
                    new PollOption
                    {
                        Details = "Details1",
                        DisplayName = "DisplayName1",
                        SequenceId = 0,
                        Votes = 0
                    },
                    new PollOption
                    {
                        Details = "Details2",
                        DisplayName = "DisplayName2",
                        SequenceId = 1,
                        Votes = 0
                    }
                }
            });
        }

        private void InitializeDIMappings(IServiceCollection services)
        {
            services.AddTransient<IQueryContext, QueryContext>();
            services.AddTransient<IVoteContext, VoteContext>();
        }

        private void ConfigureMVC(MvcOptions options)
        {
            options.Filters.Add(typeof(ValidateModelAttribute));
        }

        private void ConfigureValidators(FluentValidationMvcConfiguration config)
        {
            config.RegisterValidatorsFromAssemblyContaining<Startup>();
        }

        private class SetupDbContext : PollDbContext
        {
            public static void AddInitialData(PollModel pollModel)
                => PollModels.Add(pollModel);
        }
    }
}
