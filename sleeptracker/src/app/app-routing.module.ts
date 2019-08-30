import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Sleepiness', loadChildren: './sleepiness/sleepiness.module#SleepinessPageModule' },
  { path: 'LoggedData', loadChildren: './logged-data/logged-data.module#LoggedDataPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }