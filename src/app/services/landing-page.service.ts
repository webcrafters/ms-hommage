import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LandingPageLinksModel, LinkSection } from '../models/landing-page-links.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) { }

  getLinks(): Observable<LinkSection[]> {
    return this.http.get<LandingPageLinksModel>('/assets/data.json').pipe(
      map(res => res.link_sections)
    );
  }

  // getCards(): Observable<CardItem[]> {
  //   // ..
  // }
}
