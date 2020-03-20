import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SlideComponent } from './slide/slide.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, ProductListComponent, ProductComponent, SlideComponent, ProductManagerComponent, ProductDetailComponent, AddProductComponent, HomeComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
