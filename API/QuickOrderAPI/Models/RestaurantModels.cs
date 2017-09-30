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
        [JsonProperty("name")]
        [DataMember( Name="name")]
        public string Name { get; set; }

        [JsonProperty("address")]
        [DataMember(Name = "address")]
        public string Address { get; set; }

        [JsonProperty("tel")]
        [DataMember(Name = "tel")]
        public string Tel { get; set; }

        [JsonProperty("imagePath")]
        [DataMember(Name = "imagePath")]
        public string ImagePath { get; set; }

    }
}