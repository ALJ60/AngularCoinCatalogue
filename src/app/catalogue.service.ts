import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Config from '../assets/app-config.json';
import { Catalogue } from './catalogue';


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private catalogueBaseUrl = `${Config.apiBaseUrl}/catalogue`;

  constructor(private httpClient: HttpClient) { }

  getCatalogues(): Observable<Catalogue[]> {
    return this.httpClient.get<Catalogue[]>(`${this.catalogueBaseUrl}/readAll.php`);
  }
}
