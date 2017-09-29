using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace QuickOrderAPI.Models
{
    public class BaseModel
    {
        [DataMember(Name = "id")]
        public string ID { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }

    }
}