//using Microsoft.AspNetCore.Mvc;
//using Smoll.Data.Contexts;
//using Smoll.Data.Entities;

//namespace Smoll.Api.Back.Controllers
//{
//    public abstract class AdminController<DbEntity, ViewModel> : Controller
//        where DbEntity : class, IEntity, new()
//        where ViewModel : class, new()
//    {
//        protected readonly AdminContext context;

//        public virtual ActionResult Index()
//        {
//            var entities = context.Set<DbEntity>();
//            return View(entities);
//        }

//        public virtual ActionResult Create()
//        {
//            var entity = new DbEntity();
//            return View(entity);
//        }

//        [HttpPost]
//        public virtual ActionResult Create(DbEntity entity)
//        {
//            if (ModelState.IsValid)
//            {
//                context.Set<DbEntity>().Add(entity);
//                context.SaveChanges();
//                return RedirectToAction("Index");
//            }

//            return View(entity);
//        }
//    }
//}
