import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandomPickupLineModule } from './random-pickup-line/random-pickup-line.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RandomPickupLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
