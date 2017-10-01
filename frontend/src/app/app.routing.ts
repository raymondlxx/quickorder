import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'restaurants',
        loadChildren: './views/restaurants/restaurants.module#RestaurantsModule'
      },
      {
        path: 'dinner-tables',
        loadChildren: './views/dinner-tables/dinner-tables.module#DinnerTablesModule'
      },
      {
        path: 'categories',
        loadChildren: './views/categories/categories.module#CategoriesModule'
      },
      {
        path: 'products',
        loadChildren: './views/products/products.module#ProductsModule'
      },
      {
        path: 'shopping-carts',
        loadChildren: './views/shopping-carts/shopping-carts.module#ShoppingCartsModule'
      },
      {
        path: 'orders',
        loadChildren: './views/orders/orders.module#OrdersModule'
      },
      {
        path: 'users',
        loadChildren: './views/users/users.module#UsersModule'
      }

    ]
  },
  {
    path: 'pages',
    component: SimpleLayout,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
