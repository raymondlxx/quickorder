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
    [RoutePrefix("api/categories")]
    public class ProductCategoriesController : BaseController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        // GET: api/ProductCategories
        public List<CategoryModel> GetAll()
        {
            var categories = db.CategoryEntities.ToList();
            return Mapper.Map<List<ProductCategoryEntity>, List<CategoryModel>>(categories);
        }

        [HttpGet]
        // GET: api/ProductCategories/5
        [ResponseType(typeof(CategoryModel))]
        public IHttpActionResult GetProductCategoryEntity(string id)
        {
            ProductCategoryEntity productCategoryEntity = db.CategoryEntities.Find(id);
            if (productCategoryEntity == null)
            {
                return NotFound();
            }

            return Ok(productCategoryEntity);
        }

        // PUT: api/ProductCategories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProductCategoryEntity(string id, ProductCategoryEntity productCategoryEntity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productCategoryEntity.ID)
            {
                return BadRequest();
            }

            db.Entry(productCategoryEntity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductCategoryEntityExists(id))
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

        // POST: api/ProductCategories
        [ResponseType(typeof(CategoryCreateViewModel))]
        public IHttpActionResult PostProductCategoryEntity(CategoryCreateViewModel entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = Mapper.Map<ProductCategoryEntity>(entity);

            item.ID = this.GenerateID();
            var restaurant = db.RestaurantEntities.Find(entity.RestaurantID);
            if (restaurant == null)
            {

            }
            item.CreateTime = DateTime.Now;
            item.UpdateTime = DateTime.Now;


            db.CategoryEntities.Add(item);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ProductCategoryEntityExists(item.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = item.ID }, item);
        }

        // DELETE: api/ProductCategories/5
        [ResponseType(typeof(ProductCategoryEntity))]
        public IHttpActionResult DeleteProductCategoryEntity(string id)
        {
            ProductCategoryEntity productCategoryEntity = db.CategoryEntities.Find(id);
            if (productCategoryEntity == null)
            {
                return NotFound();
            }

            db.CategoryEntities.Remove(productCategoryEntity);
            db.SaveChanges();

            return Ok(productCategoryEntity);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductCategoryEntityExists(string id)
        {
            return db.CategoryEntities.Count(e => e.ID == id) > 0;
        }
    }
}