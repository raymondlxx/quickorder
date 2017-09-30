using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Models
{
    public class DiningTableModel : BaseModel
    {

        public string TableNo { get; set; }
        public string Description { get; set; }

    }
}