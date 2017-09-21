using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Models
{
    public class RestaurantModels : BaseModel
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Tel { get; set; }
        public string ImagePath { get; set; }

    }
}