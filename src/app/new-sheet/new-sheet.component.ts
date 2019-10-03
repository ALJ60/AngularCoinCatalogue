import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { SheetService } from '../sheet.service';
import { MessageService } from '../message.service';
import { AlbumService } from '../album.service';
import { Album  } from '../album';
import { CollectionService  } from '../collection.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.css']
})
export class NewSheetComponent implements OnInit {

  saving = false;

  albums: Album[];
  collections: Collection[];

  sheetForm = this.fb.group({
    sheet: ['', Validators.required],
    rows: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
    columns: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
    album: ['0'],
    collection: ['0']
  });

  get sheetField() {
    return this.sheetForm.get('sheet');
  }

  get rowsField() {
    return this.sheetForm.get('rows');
  }

  get rowsError() {
    if (this.rowsField.hasError('required')) {
      return 'Rows is required and must be a valid number between 1 and 9';
    } else if (this.rowsField.hasError('min') || this.rowsField.hasError('max')) {
      return 'Rows must be between 1 and 9';
    } else {
      return '';
    }
  }

  get columnsField() {
    return this.sheetForm.get('columns');
  }

  get columnsError() {
    if (this.columnsField.hasError('required')) {
      return 'Columns is required and must be a valid number between 1 and 9';
    } else if (this.columnsField.hasError('min') || this.columnsField.hasError('max')) {
      return 'Columns must be between 1 and 9';
    } else {
      return '';
    }
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sheetService: SheetService,
    private messageService: MessageService,
    private albumService: AlbumService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.loadAlbums();
    this.loadCollections();
  }

  onSubmit() {
    this.saving = true;
    this.sheetService.createSheet({
      sheet: this.sheetForm.value.sheet,
      rows: this.sheetForm.value.rows,
      columns: this.sheetForm.value.columns,
      albumId: this.sheetForm.value.album,
      collectionId: this.sheetForm.value.collection}).subscribe(
      () => this.returnToList(),
      error => {
        this.messageService.displayHttpError(error);
        this.saving = false;
      }
    );
  }

  returnToList() {
    this.router.navigate(['/sheets']);
  }

  loadAlbums() {
    this.albumService.getAlbums(false).subscribe(
      data => this.albums = data,
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );

  }

  loadCollections() {
    this.collectionService.getCollections().subscribe(
      data => this.collections = data,
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );

  }

}
