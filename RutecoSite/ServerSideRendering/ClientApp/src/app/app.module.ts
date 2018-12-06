import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MODULE_COMPONENTS, MODULE_SERVICES, MATERIAL_DESIGN } from './moduleExports';

@NgModule({
  declarations: [
    AppComponent,
    MODULE_COMPONENTS
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    // BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MATERIAL_DESIGN
  ],
  providers: [MODULE_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
