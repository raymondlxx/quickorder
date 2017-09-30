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

    [RoutePrefix("api/restaurants")]
    public class RestaurantsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Restaurants
        public List<RestaurantModel> GetRestaurants()
        {
            var items = db.RestaurantEntities.ToList();
            return Mapper.Map<List<RestaurantEntity>, List<RestaurantModel>>(items);
        }

        // GET: api/Restaurants/5
        [ResponseType(typeof(RestaurantEntity))]
        public IHttpActionResult GetRestaurantEntity(string id)
        {
            RestaurantEntity restaurantEntity = db.RestaurantEntities.Find(id);
            if (restaurantEntity == null)
            {
                return NotFound();
            }

            return Ok(restaurantEntity);
        }

        // PUT: api/Restaurants/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRestaurantEntity(string id, RestaurantEntity restaurantEntity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != restaurantEntity.ID)
            {
                return BadRequest();
            }

            db.Entry(restaurantEntity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestaurantEntityExists(id))
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
        [ResponseType(typeof(RestaurantModel))]
        public IHttpActionResult PostRestaurantModel([FromBody]RestaurantModel model)
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
                if (RestaurantEntityExists(model.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = model.ID }, model);
        }

        // DELETE: api/Restaurants/5
        [ResponseType(typeof(RestaurantEntity))]
        public IHttpActionResult DeleteRestaurantEntity(string id)
        {
            RestaurantEntity restaurantEntity = db.RestaurantEntities.Find(id);
            if (restaurantEntity == null)
            {
                return NotFound();
            }

            db.RestaurantEntities.Remove(restaurantEntity);
            db.SaveChanges();

            return Ok(restaurantEntity);
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