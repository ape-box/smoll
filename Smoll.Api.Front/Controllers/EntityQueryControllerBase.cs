using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Smoll.Api.Common.Controllers.Extensions;
using Smoll.Api.Front.Models;
using Smoll.Data.Entities;

namespace Smoll.Api.Front.Controllers
{
    [Route("api/v1/[controller]")]
    public class EntityQueryControllerBase<TEntity> : Controller
        where TEntity : class, IPublicationEntity
    {
        protected readonly IQueryRepository Repository;

        public EntityQueryControllerBase(IQueryRepository repository)
        {
            this.Repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpGet]
        public async Task<IActionResult> Get(int? pageNumber, int? pageSize)
            => Ok(await Repository.GetOrderedPageAsync<TEntity>(
                this.RestrictPagination(pageNumber, pageSize)));

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
            => Ok(await Repository.GetByIdAsync<TEntity>(id));
    }
}
