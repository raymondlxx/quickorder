using QuickOrderAPI.Mappings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.App_Start
{
    public class BootStrapper
    {
        public static void Run()
        {
            //Configure AutoMapper
            AutoMapperConfiguration.Configure();
        }
    }
}