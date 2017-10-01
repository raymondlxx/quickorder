import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';

// Components Routing
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantAddComponent } from './restaurants/restaurant-add.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail.component';
import { DinnerTablesComponent } from './dinner-tables/dinner-tables.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'social-buttons',
        component: SocialButtonsComponent,
        data: {
          title: 'Social buttons'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {path: 'restaurants',component: RestaurantsComponent,data: {title: '餐馆管理'}},
      {path: 'restaurant-add',component: RestaurantAddComponent,data: null},
      {path: 'restaurant-detail/:id',component: RestaurantDetailComponent,data: {title:"餐馆详情"}},
      {path: 'categories',component: CategoriesComponent,data: {title: '分类管理'}},
      {path: 'products',component: ProductsComponent,data: {title: '菜品管理'}},
      {path: 'dinner-tables',component: DinnerTablesComponent,data: {title: '餐桌管理'}},
      {path: 'orders',component: OrdersComponent,data: {title: '订单管理'}},
      {path: 'users',component: UsersComponent,data: {title: '用户管理'}},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
