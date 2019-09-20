import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentListComponent } from './consent-list/consent-list.component';

const routes: Routes = [
  {
    path : '',
    component : ConsentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
