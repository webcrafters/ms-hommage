import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { GithubGloryPageComponent } from './github-glory-page/github-glory-page.component';


const routes: Routes = [
  { path: 'ms-home', component: LandingPageComponent },
  { path: 'feedback', component: FeedbackPageComponent },
  { path: 'github', component: GithubGloryPageComponent },
  { path: '',
    redirectTo: '/ms-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
