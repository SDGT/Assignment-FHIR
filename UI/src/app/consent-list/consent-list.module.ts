import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentListRoutingModule } from './consent-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConsentListRoutingModule,
    MatCheckboxModule
  ]
})
export class ConsentListModule { }
