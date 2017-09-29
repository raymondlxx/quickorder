import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantAddComponent } from './restaurants/restaurant-add.component';
import { DinnerTablesComponent } from './dinner-tables/dinner-tables.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryAddComponent } from './categories/category-add.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { UsersComponent } from './users/users.component';


@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        HttpClientModule,
        CommonModule,
        ComponentsRoutingModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule
    ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        ModalsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
        TabsComponent,
        RestaurantsComponent,
        RestaurantAddComponent,
        DinnerTablesComponent,
        CategoriesComponent,
        CategoryAddComponent,
        ProductsComponent,
        OrdersComponent,
        ShoppingCartsComponent,
        UsersComponent
    ]
})
export class ComponentsModule { }
