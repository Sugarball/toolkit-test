import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { 
  VizDateRangePickerMudule,
  VizHeaderMudule,
  VizButtonModule,
  VizFooterMudule
} from 'viz-toolkit';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // ...(Object.keys(VizModules).map(i => VizModules[i])),
    VizDateRangePickerMudule,
    VizHeaderMudule,
    VizButtonModule,
    VizFooterMudule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }