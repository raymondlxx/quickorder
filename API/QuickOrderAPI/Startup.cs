﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using System.Web.Http;

[assembly: OwinStartup(typeof(QuickOrderAPI.Startup))]

namespace QuickOrderAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
        

            ConfigureAuth(app);


            WebApiConfig.Register(config);
            
            app.UseWebApi(config);

        }
    }
}
