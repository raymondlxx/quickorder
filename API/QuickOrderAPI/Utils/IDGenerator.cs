using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Utils
{
    public class IDGenerator
    {
        public static string GetID()
        {
            return Guid.NewGuid().ToString("N");
        }
    }
}