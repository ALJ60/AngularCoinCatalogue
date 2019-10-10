import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Config from '../assets/app-config.json';
import { CatalogueEdition  } from './catalogue-edition';

@Injectable({
  providedIn: 'root'
})
export class CatalogueEditionService {

  private catalogueEditionBaseUrl = `${Config.apiBaseUrl}/catalogueEdition`;

  constructor(private httpClient: HttpClient) { }

  getCatalogueEditions(): Observable<CatalogueEdition[]> {
    return this.httpClient.get<CatalogueEdition[]>(`${this.catalogueEditionBaseUrl}/readAll.php`);
  }

  deleteCatalogueEdition(id: number): Observable<void> {
    return this.httpClient.post<void>(`${this.catalogueEditionBaseUrl}/delete.php`, id);
  }

}
