using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using QuickOrderAPI.DBEntity;
using QuickOrderAPI.Models;
using QuickOrderAPI.Utils;
using AutoMapper;

namespace QuickOrderAPI.Controllers
{
    [RoutePrefix("api/Restaurants")]
    public class RestaurantsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        [Route("GetAll")]
        public List<RestaurantModel> GetAll()
        {
            var items = db.RestaurantEntities.ToList();
            return Mapper.Map<List<RestaurantEntity>, List<RestaurantModel>>(items);
        }

        [HttpPost]
        [Route("GetByQuery")]
        public GetByQueryResponse<List<RestaurantModel>> GetByQuery(GetByQueryRequest request)
        {
            GetByQueryResponse<List<RestaurantModel>> result = new GetByQueryResponse<List<RestaurantModel>>();
            var pageIndex = request.Paging.PageIndex;
            if (pageIndex <= 0)
            {
                pageIndex = 1;
            }
            var pageSize = request.Paging.PageSize;
            result.TotalCount = db.RestaurantEntities.Count();
           
            var totalPageCount = result.TotalCount / pageSize;

            if (result.TotalCount % pageSize != 0)
            {
                totalPageCount++;
            }
            if(pageIndex> totalPageCount)
            {
                pageIndex = totalPageCount;
            }
            result.PageIndex = pageIndex;
            var items = db.RestaurantEntities.OrderByDescending(item => item.UpdateTime).Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();

            result.Items =  Mapper.Map<List<RestaurantEntity>, List<RestaurantModel>>(items);
            return result;
        }

        [HttpPost]
        [Route("GetByID")]
        public IHttpActionResult GetByID(GetRestaurantByIDRequest request)
        {
            RestaurantEntity restaurantEntity = db.RestaurantEntities.Find(request.ID);
            if (restaurantEntity == null)
            {
                return NotFound();
            }

            return Ok(restaurantEntity);
        }


        [HttpPost]
        [Route("Update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Update(RestaurantModel entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = Mapper.Map<RestaurantEntity>(entity);
            item.UpdateTime = DateTime.Now;

            db.Entry(item).State = EntityState.Modified;


            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestaurantEntityExists(item.ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }


        // POST: api/Restaurants
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult Create(RestaurantModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            RestaurantEntity entity = Mapper.Map<RestaurantModel, RestaurantEntity>(model);
            entity.ID = IDGenerator.GetID();
            entity.CreateTime = DateTime.Now;
            entity.UpdateTime = DateTime.Now;

            db.RestaurantEntities.Add(entity);


            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (RestaurantEntityExists(entity.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

           var result =  Mapper.Map<RestaurantModel>(entity);

            return Json(result);
        }

        [HttpPost]
        [Route("DeleteByID")]
        public IHttpActionResult DeleteByID(RestaurantDeleteModel entity)
        {
            RestaurantEntity restaurantEntity = db.RestaurantEntities.Find(entity.ID);
            if (restaurantEntity == null)
            {
                return BadRequest(ModelState);
            }
            
            db.RestaurantEntities.Remove(restaurantEntity);
            db.SaveChanges();
            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RestaurantEntityExists(string id)
        {
            return db.RestaurantEntities.Count(e => e.ID == id) > 0;
        }
    }
}