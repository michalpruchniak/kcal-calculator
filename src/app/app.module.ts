import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsService } from './products/products.service';
import { DietPlanComponent } from './diet-plan/diet-plan/diet-plan.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ElementComponent } from './diet-plan/element/element.component';
import { DietService } from './diet-plan/diet.service';
import { NewProfileComponent } from './profiles/new-profile/new-profile.component';
import { ProfilesListComponent } from './profiles/profiles-list/profiles-list.component';
import { ProfilComponent } from './profiles/profil/profil.component';
import { ProfilesService} from './profiles/profiles.service';
import { ShortInformationComponent } from './stats/short-information/short-information.component';
import 'hammerjs';
const routes:Routes = [
  { path: '', component: DietPlanComponent},
  { path: 'diet-plan', component: DietPlanComponent},
  { path: 'new-product', component: NewProductComponent},
  { path: 'profiles-list', component: ProfilesListComponent},
  { path: 'new-profile', component: NewProfileComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    DietPlanComponent,
    ElementComponent,
    NewProductComponent,
    NewProfileComponent,
    ProfilesListComponent,
    ProfilComponent,
    ShortInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductsService, DietService, ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
