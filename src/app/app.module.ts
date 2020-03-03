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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { FeedbackComponent } from './feedback-page/feedback/feedback.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavComponent,
    LandingShowcaseComponent,
    LandingCardsComponent,
    LandingBottomComponent,
    AppCaseComponent,
    FeedbackComponent,
    FeedbackPageComponent
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
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
