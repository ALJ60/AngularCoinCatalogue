import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SheetService } from '../sheet.service';
import { MessageService } from '../message.service';
import { Sheet } from '../sheet';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.css']
})
export class SheetsComponent implements OnInit {

  dataSource = new MatTableDataSource<Sheet>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['sheet', 'album', 'collection', 'buttons'];

  loading = true;

  constructor(
    private sheetService: SheetService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadSheets();
  }

  loadSheets() {
    this.loading = true;
    this.sheetService.getSheets().subscribe(
      data => {
        this.dataSource.data = data;
        this.loading = false;
      },
      error => {
        this.messageService.displayHttpError(error);
        this.loading = false;
      }
    );
  }

  deleteSheet(sheet: Sheet) {
    this.messageService.confirm(
      'Are you sure?',
      `Are you sure you want to delete sheet '${sheet.sheet}'?`
      ).subscribe(
      confirm => {
        if (confirm) {
          this.loading = true;
          this.sheetService.deleteSheet(sheet.id).subscribe(
            () => this.loadSheets(),
            error => {
              this.messageService.displayHttpError(error);
              this.loading = false;
            }
          );
        }
      }
    );
  }

}
