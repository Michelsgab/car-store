import { NgModule, NgModuleFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CarComponent } from './pages/car/car.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'car/:id', component: CarComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
