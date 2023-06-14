import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { IEVNComponent } from './ievn/ievn.component';
import { IRICComponent } from './iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    IEVNComponent,
    IRICComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
