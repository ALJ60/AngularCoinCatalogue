import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Config from '../assets/app-config.json';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  private sheetBaseUrl = `${Config.apiBaseUrl}/sheet`;

  constructor(private httpClient: HttpClient) { }

  getSheet(id: number): Observable<Sheet> {
    return this.httpClient.get<Sheet>(`${this.sheetBaseUrl}/read.php?id=${id}`);
  }

  getSheets(): Observable<Sheet[]> {
    return this.httpClient.get<Sheet[]>(`${this.sheetBaseUrl}/readAll.php`);
  }

  createSheet(sheet: Sheet): Observable<void> {
    return this.httpClient.post<void>(`${this.sheetBaseUrl}/insert.php`, sheet);
  }

  updateSheet(sheet: Sheet): Observable<void> {
    return this.httpClient.post<void>(`${this.sheetBaseUrl}/update.php`, sheet);
  }

  deleteSheet(id: number): Observable<void> {
    return this.httpClient.post<void>(`${this.sheetBaseUrl}/delete.php`, id);
  }
}
