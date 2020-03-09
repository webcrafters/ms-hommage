import { Component, OnInit } from '@angular/core';
import { GithubService, UserStatsModel } from '../services/github.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-github-glory-page',
  templateUrl: './github-glory-page.component.html',
  styleUrls: ['./github-glory-page.component.scss']
})
export class GithubGloryPageComponent implements OnInit {
  stats$: Observable<UserStatsModel[]>;
  minRepos = 50000;

  constructor(private githubSvc: GithubService) { }

  ngOnInit(): void {
    this.stats$ = this.githubSvc.getTopUsersWithStats(this.minRepos);
  }
}
