import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';


const routes: Routes = [
  { path: 'ms-home', component: LandingPageComponent },
  { path: 'feedback', component: FeedbackPageComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
