import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './appComponents/navbar/navbar.component';
import { FooterComponent } from './appComponents/footer/footer.component';
import { SubscribeComponent } from './appComponents/subscribe/subscribe.component';
import { SocialComponent } from './appComponents/social/social.component';
import { BlogComponent } from './appComponents/blog/blog.component';
import { ProductsComponent } from './appComponents/products/products.component';
import { MainBannerComponent } from './appComponents/main-banner/main-banner.component';
import { HomeComponent } from './appComponents/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './appComponents/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    SocialComponent,
    BlogComponent,
    ProductsComponent,
    MainBannerComponent,
    HomeComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }