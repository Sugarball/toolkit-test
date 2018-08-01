import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
  VizDateRangePickerMudule,
  VizHeaderMudule,
  VizButtonModule,
  VizFooterMudule,
  VizSelectModule
} from 'viz-toolkit';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
  
  BrowserModule,
    BrowserAnimationsModule,
    // ...(Object.keys(VizModules).map(i => VizModules[i])),
    VizDateRangePickerMudule,
    VizHeaderMudule,
    VizButtonModule,
    VizFooterMudule,
    AppRoutingModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }