using AutoMapper;
using QuickOrderAPI.DBEntity;
using QuickOrderAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickOrderAPI.Mappings
{
    public class ViewModelToDomainMappingProfile:Profile
    {
        public override string ProfileName
        {
            get { return "ViewModelToDomainMappings"; }
        }

        public ViewModelToDomainMappingProfile()
        {
            CreateMap<RestaurantModel,RestaurantEntity>();
            CreateMap<CategoryModel, ProductCategoryEntity>();
            CreateMap<CategoryCreateViewModel, ProductCategoryEntity>();
        }
    }
}