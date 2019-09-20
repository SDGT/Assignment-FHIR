import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentListComponent } from './consent-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConsentListComponent,
    data: {
      title: 'List',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentListRoutingModule { }
