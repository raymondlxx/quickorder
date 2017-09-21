using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Models
{
    public class ProductModels : BaseModel
    {
        public string Name { get; set; }

        public decimal Price { get; set; }

        public List<string> ImagePaths { get; set; }
    }
}