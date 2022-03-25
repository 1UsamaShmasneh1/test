import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestPageComponent } from './test-page/test-page.component';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
