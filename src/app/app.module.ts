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
import { MatButtonModule} from '@angular/material/button';
import { AppCaseComponent } from './app-case/app-case.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavComponent,
    LandingShowcaseComponent,
    LandingCardsComponent,
    LandingBottomComponent,
    AppCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
