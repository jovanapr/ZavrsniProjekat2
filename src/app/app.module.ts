import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule, Routes} from '@angular/router';
import { CategoryComponent } from './shop/category/category.component';
import { ProductComponent } from './shop/category/product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: "shop", component: ShopComponent},
  {path: "category", component: CategoryComponent},
  {path:"product/:id", component: ProductComponent},
  {path:"shoppingCart", component: ShoppingCartComponent},
  {path:"Login", component: LoginComponent},
  {path: "Singup", component: SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SocialbarComponent,
    FooterComponent,
    ShopComponent,
    CategoryComponent,
    ProductComponent,
    ShoppingCartComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
