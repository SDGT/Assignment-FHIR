import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsentListComponent } from './consent-list/consent-list.component';
// tslint:disable-next-line: max-line-length
import {MatToolbarModule,MatDialogModule, MatInputModule,MatIconModule, MatButtonModule, MatSidenavModule, MatSelectModule, MatFormFieldModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialog, MatDialogConfig, MatCheckboxModule, MatButtonToggleModule, MatRadioModule, MatSnackBarModule, MatSnackBarConfig} from '@angular/material';
import { ConsentComponent } from './consent-list/consent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsentListComponent,
    ConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule, MatFormFieldModule, MatCardModule, MatTableModule, MatPaginatorModule,
    MatButtonModule,
    MatInputModule, MatIconModule, MatDialogModule, MatCheckboxModule, MatButtonToggleModule, MatRadioModule, MatSnackBarModule
  ],
  entryComponents: [ConsentComponent],
  providers: [MatDialog, MatDialogConfig, MatSnackBarConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
