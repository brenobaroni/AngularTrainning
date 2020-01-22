import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TruncateModule } from 'ng2-truncate'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './user/register/register.user.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './user/login/login.component';

import { RouteGuard } from './authorization/route.guard';
import { UserService } from './services/user/user.service';
import { ProductService } from './services/product/product.service';
import { SearchProductComponent } from './product/search/search.product.component';
import { ShopSearchComponent } from './shop/search/shop.search.component';
import { ShopProductComponent } from './shop/product/shop.product.component';
import { ShopMakePurshase } from './shop/makePurchase/shop.makePurshase.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    RegisterUserComponent,
    SearchProductComponent,
    ShopSearchComponent,
    ShopProductComponent,
    ShopMakePurshase,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    TruncateModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent, canActivate: [RouteGuard] }, // canActivate: [RouteGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register-user', component: RegisterUserComponent },
      { path: 'search-product', component: SearchProductComponent, canActivate: [RouteGuard] },
      { path: 'shop-product', component: ShopProductComponent },
      { path: 'shop-makePurshase', component: ShopMakePurshase, canActivate: [RouteGuard] },
      //{ path: 'app-shop', component: ShopSearchComponent},
    ]),
  ],
  providers: [UserService, ProductService], //# All Services here.
  bootstrap: [AppComponent],
})
export class AppModule { }
