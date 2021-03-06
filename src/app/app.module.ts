import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { ParentComponent } from './parent/parent.component';
import { C2Component } from './c2/c2.component';
import { BulbComponent } from './bulb/bulb.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    ParentComponent,
    C2Component,
    BulbComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
