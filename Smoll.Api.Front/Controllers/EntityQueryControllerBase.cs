using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Smoll.Api.Front.Models;
using Smoll.Data.Entities;

namespace Smoll.Api.Front.Controllers
{
    [Route("api/v1/[controller]")]
    public class EntityQueryControllerBase<TEntity> : Controller
        where TEntity : class, IPublicationEntity
    {
        private readonly IQueryRepository repository;

        public EntityQueryControllerBase(IQueryRepository repository)
        {
            this.repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpGet]
        public async Task<IActionResult> Get(int? pageNumber, int? pageSize)
            => Ok(await repository.GetOrderedPageAsync<TEntity>(
                pageNumber ?? repository.DefaultPageNumber,
                pageSize ?? repository.DefaultPageSize));

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
            => Ok(await repository.GetByIdAsync<TEntity>(id));
    }
}
