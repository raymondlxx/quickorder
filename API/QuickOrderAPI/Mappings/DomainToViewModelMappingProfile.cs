using AutoMapper;
using QuickOrderAPI.DBEntity;
using QuickOrderAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Mappings
{
    public class DomainToViewModelMappingProfile: Profile
    {
        public override string ProfileName
        {
            get { return "DomainToViewModelMappings"; }
        }

        public DomainToViewModelMappingProfile()
        {
            CreateMap<RestaurantEntity, RestaurantModel>();
        }
    }
}