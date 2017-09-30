using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QuickOrderAPI.Controllers
{
    public class BaseController : ApiController
    {
        protected string GenerateID()
        {
            return Utils.IDGenerator.GetID();
        }
    }
}
