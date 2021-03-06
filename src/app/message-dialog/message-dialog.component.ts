import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

interface DialogData {
  heading: string;
  message: string;
}

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

}
