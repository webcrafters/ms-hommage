import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavComponent } from './landing-page/landing-nav/landing-nav.component';
import { LandingShowcaseComponent } from './landing-page/landing-showcase/landing-showcase.component';
import { LandingCardsComponent } from './landing-page/landing-cards/landing-cards.component';
import { LandingBottomComponent } from './landing-page/landing-bottom/landing-bottom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavComponent,
    LandingShowcaseComponent,
    LandingCardsComponent,
    LandingBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
