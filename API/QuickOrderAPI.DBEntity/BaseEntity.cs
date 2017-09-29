using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickOrderAPI.DBEntity
{
    public class BaseEntity
    {
        [Key]
        public string ID { get; set; }

    }
}
