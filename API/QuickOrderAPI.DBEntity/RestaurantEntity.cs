using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickOrderAPI.DBEntity
{
    [Table("Restaurant")]
    public class RestaurantEntity : BaseEntity
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Tel { get; set; }
        public string ImagePath { get; set; }

    }
}
