using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Models
{
    public class BaseModel
    {
        public string ID { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }

    }
}