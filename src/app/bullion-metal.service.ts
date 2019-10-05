import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Config from '../assets/app-config.json';
import { BullionMetal } from './bullion-metal';

@Injectable({
  providedIn: 'root'
})
export class BullionMetalService {

  private bullionBaseUrl = `${Config.apiBaseUrl}/bullion`;

  constructor(private httpClient: HttpClient) { }

  getBullionMetal(id: number): Observable<BullionMetal> {
    return this.httpClient.get<BullionMetal>(`${this.bullionBaseUrl}/read.php?id=${id}`);
  }

  getBullionMetals(): Observable<BullionMetal[]> {
    return this.httpClient.get<BullionMetal[]>(`${this.bullionBaseUrl}/readAll.php`);
  }

  createBullionMetal(bullionMetal: BullionMetal): Observable<void> {
    return this.httpClient.post<void>(`${this.bullionBaseUrl}/insert.php`, bullionMetal);
  }

  updateBullionMetal(bullionMetal: BullionMetal): Observable<void> {
    return this.httpClient.post<void>(`${this.bullionBaseUrl}/update.php`, bullionMetal);
  }

  deleteBullionMetal(id: number): Observable<void> {
    return this.httpClient.post<void>(`${this.bullionBaseUrl}/delete.php`, id);
  }

}
