using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Smoll.Api.Back.Models;
using Smoll.Api.Common.Controllers.Extensions;
using Smoll.Api.Common.Controllers.Models;
using Smoll.Data.Entities;

namespace Smoll.Api.Back.Controllers
{
    [Route("api/v1/[controller]")]
    public abstract class EntityAdminControllerBase<TEntity> : ControllerBase
        //public abstract class EntityAdminControllerBase<TEntity> : Controller
        where TEntity : class, IPublicationEntity
    {
        protected readonly IAdminRepository Repository;

        public EntityAdminControllerBase(IAdminRepository repository)
        {
            Repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        protected new ActionResult Ok(object value)
            => base.Ok(new ResponseWrapperModel
                {
                    Status = Enum.GetName(typeof(HttpStatusCode), HttpStatusCode.OK),
                    Errors = new String[0],
                    Data = value
                });

        [HttpGet]
        public async Task<IActionResult> Get(int? pageNumber, int? pageSize)
            => Ok(await Repository.GetOrderedPageAsync<TEntity>(
                this.RestrictPagination(pageNumber, pageSize)));

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
            => Ok(await Repository.GetByIdAsync<TEntity>(id));

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]TEntity model)
            => Ok(await Repository.Create(model, "Placeholder").SaveAsync());

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]TEntity model)
            => Ok(await Repository.Update(id, model, "Placeholder").SaveAsync());

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
            => Ok(await Repository.DisableEntity<TEntity>(id, "Placeholder").SaveAsync());

    }
}
