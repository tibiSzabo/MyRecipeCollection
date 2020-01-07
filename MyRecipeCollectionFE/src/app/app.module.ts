import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TooltipModule } from 'ng2-tooltip-directive';

import { TooltipOptions } from 'ng2-tooltip-directive';

export const defaultTooltipOptions: TooltipOptions = {
  'show-delay': 100,
  'tooltip-class': 'tooltip',
  placement: 'right',
  'hide-delay': 100
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(defaultTooltipOptions as TooltipOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
