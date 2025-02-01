import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { GreetingComponent } from './component/greeting/greeting.component';
import { DataComponent } from './component/data/data.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: 'data', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
