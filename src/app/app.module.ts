import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
