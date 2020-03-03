import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { LinkSection } from '../../models/landing-page-links.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-bottom',
  templateUrl: './landing-bottom.component.html',
  styleUrls: ['./landing-bottom.component.scss']
})
export class LandingBottomComponent implements OnInit {

  sections$: Observable<LinkSection[]>;

  constructor(private linksService: LandingPageService) { }

  ngOnInit(): void {
    this.sections$ = this.linksService.getLinks();
  }

}
