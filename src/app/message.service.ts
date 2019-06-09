import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public dialog: MatDialog) { }

  displayHttpError(error: any) {
    this.dialog.open(
      MessageDialogComponent,
      {data: {heading: 'Error', message: typeof(error.error) === 'string' ? error.error : error.message}}
      );
  }

  confirm(heading: string, message: string): Observable<any> {
    return this.dialog.open(ConfirmDialogComponent, {data: {heading, message}}).afterClosed();
  }

}
