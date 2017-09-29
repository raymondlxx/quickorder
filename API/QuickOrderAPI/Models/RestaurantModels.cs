using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace QuickOrderAPI.Models
{
    [DataContract]
    public class RestaurantModel : BaseModel
    {
        [DataMember( Name="name")]
        public string Name { get; set; }

        [DataMember(Name = "address")]
        public string Address { get; set; }

        [DataMember(Name = "tel")]
        public string Tel { get; set; }

        [DataMember(Name = "imagePath")]
        public string ImagePath { get; set; }

    }
}