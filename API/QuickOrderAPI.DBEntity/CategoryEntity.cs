using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickOrderAPI.DBEntity
{
    [Table("ProductCategory")]
    public class ProductCategoryEntity:BaseEntity
    {
        public string RestaurantID { get; set; }

        public string Name { get; set; }

        public string ParentCategoryID { get; set; }

    }
}
