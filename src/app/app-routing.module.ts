import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ProductsComponent} from './products/products.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {GalleryComponent} from './gallery/gallery.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'About', component: AboutUsComponent
  },
  {
    path: 'Products', component: ProductsComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
