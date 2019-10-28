import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './modules/rent/pages/houses/houses.component';
import { AddHouseComponent } from './modules/rent/pages/add-house/add-house.component';
import { HouseComponent } from './modules/rent/pages/house/house.component';


const routes: Routes = [
  { path: 'rent/houses', component: HousesComponent },
  { path: 'rent/houses/add', component: AddHouseComponent },
  { path: 'rent/houses/id', component: HouseComponent },
  { path: '', redirectTo: 'rent/houses', pathMatch: 'full' },
  { path: '**', redirectTo: 'rent/houses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
