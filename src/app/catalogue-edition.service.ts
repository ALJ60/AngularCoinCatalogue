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

  getCatalogueEdition(id: number): Observable<CatalogueEdition> {
    return this.httpClient.get<CatalogueEdition>(`${this.catalogueEditionBaseUrl}/read.php?id=${id}`);
  }

  getCatalogueEditions(): Observable<CatalogueEdition[]> {
    return this.httpClient.get<CatalogueEdition[]>(`${this.catalogueEditionBaseUrl}/readAll.php`);
  }

  createCatalogueEdition(catalogueEdition: CatalogueEdition): Observable<void> {
    return this.httpClient.post<void>(`${this.catalogueEditionBaseUrl}/insert.php`, catalogueEdition);
  }

  updateCatalogueEdition(catalogueEdition: CatalogueEdition): Observable<void> {
    return this.httpClient.post<void>(`${this.catalogueEditionBaseUrl}/update.php`, catalogueEdition);
  }

  deleteCatalogueEdition(id: number): Observable<void> {
    return this.httpClient.post<void>(`${this.catalogueEditionBaseUrl}/delete.php`, id);
  }

}
