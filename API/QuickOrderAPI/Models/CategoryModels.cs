﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Models
{
    public class CategoryModel: BaseModel
    {
        public string RestaurantID { get; set; }

        public string Name { get; set; }

        public string ParentCategoryID { get; set; }

        public ICollection<ProductModel> Products { get; set; }
    }
    public class CategoryCreateViewModel
    {
        public string RestaurantID { get; set; }

        public string Name { get; set; }

        public string ParentCategoryID { get; set; }
    }
}