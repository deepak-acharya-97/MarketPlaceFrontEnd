import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
}, {
  path: 'detail/:id', component: DetailComponent
}, {
  path: 'dashboard', component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
