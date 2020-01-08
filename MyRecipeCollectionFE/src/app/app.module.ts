import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TooltipModule } from 'ng2-tooltip-directive';

import { TooltipOptions } from 'ng2-tooltip-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const defaultTooltipOptions: TooltipOptions = {
  theme: 'light',
  placement: 'right',
  'show-delay': 500,
  'tooltip-class': 'tooltip',
  'hide-delay': 100,
  'display-mobile': false
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(defaultTooltipOptions as TooltipOptions),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
