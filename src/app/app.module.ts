import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TourFormModule } from './tour-form';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TourFormModule,
    NgbModule.forRoot()],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
