using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace QuickOrderAPI.Models
{

    public class RestaurantModel : BaseModel
    {

        public string Name { get; set; }


        public string Address { get; set; }

  
        public string Tel { get; set; }


        public string ImagePath { get; set; }

    }

    public class RestaurantDeleteModel
    {
        public string ID { get; set; }

    }
}