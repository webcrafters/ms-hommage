import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.scss']
})
export class LandingNavComponent implements OnInit {
  @Input() showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
