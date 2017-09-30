using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickOrderAPI.DBEntity
{
    [Table("Product")]
    public class ProductEntity:BaseEntity
    {
        public string Name { get; set; }

        public int CategoryID { get; set; }

        public virtual ProductCategoryEntity Category { get; set; }

    }
}
