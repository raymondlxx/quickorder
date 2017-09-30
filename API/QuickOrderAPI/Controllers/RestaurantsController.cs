﻿using System;
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

        // GET: api/Restaurants
        [Route("GetAll")]
        public List<RestaurantModel> GetAll()
        {
            var items = db.RestaurantEntities.ToList();
            return Mapper.Map<List<RestaurantEntity>, List<RestaurantModel>>(items);
        }

        // GET: api/Restaurants/5
        [Route("GetByID")]
        [ResponseType(typeof(RestaurantEntity))]
        public IHttpActionResult GetByID(string id)
        {
            RestaurantEntity restaurantEntity = db.RestaurantEntities.Find(id);
            if (restaurantEntity == null)
            {
                return NotFound();
            }

            return Ok(restaurantEntity);
        }

        // PUT: api/Restaurants/5
        [HttpPut]
        [Route("Update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Update(RestaurantEntity entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(entity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestaurantEntityExists(entity.ID))
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

            return CreatedAtRoute("DefaultApi", new { id = entity.ID }, entity);
        }

        // DELETE: api/Restaurants/5
        [HttpPost]
        [Route("DeleteByID")]
        public void DeleteByID([FromBody]RestaurantDeleteModel entity)
        {
            RestaurantEntity restaurantEntity = db.RestaurantEntities.Find(entity.ID);
            if (restaurantEntity == null)
            {
                return;
            }
            
            db.RestaurantEntities.Remove(restaurantEntity);
            db.SaveChanges();
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