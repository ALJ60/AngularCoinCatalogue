import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { SheetService } from '../sheet.service';
import { MessageService } from '../message.service';
import { AlbumService } from '../album.service';
import { Album  } from '../album';
import { CollectionService  } from '../collection.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-edit-sheet',
  templateUrl: './edit-sheet.component.html',
  styleUrls: ['./edit-sheet.component.css']
})
export class EditSheetComponent implements OnInit {

  saving = false;

  id: number;

  albums: Album[];
  collections: Collection[];

  sheetForm = this.fb.group({
    sheet: ['', Validators.required],
    rows: ['', [Validators.required, Validators.pattern('[1-9]')]],
    columns: ['', [Validators.required, Validators.pattern('[1-9]')]],
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
      return 'Rows is required and must be an integer between 1 and 9';
    } else if (this.rowsField.hasError('pattern')) {
      return 'Rows must an integer between 1 and 9';
    } else {
      return '';
    }
  }

  get columnsField() {
    return this.sheetForm.get('columns');
  }

  get columnsError() {
    if (this.columnsField.hasError('required')) {
      return 'Columns is required and must be an integer between 1 and 9';
    } else if (this.columnsField.hasError('pattern')) {
      return 'Columns must be an integer between 1 and 9';
    } else {
      return '';
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private sheetService: SheetService,
    private messageService: MessageService,
    private albumService: AlbumService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadSheet();
    this.loadAlbums();
    this.loadCollections();
  }

  onSubmit() {
    this.saving = true;
    this.sheetService.updateSheet({
      id: this.id,
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

  loadSheet() {
    this.sheetService.getSheet(this.id).subscribe(
      data => {
        this.sheetField.setValue(data.sheet);
        this.sheetForm.get('rows').setValue(data.rows);
        this.sheetForm.get('columns').setValue(data.columns);
        this.sheetForm.get('album').setValue(data.albumId === null ? '0' : data.albumId);
        this.sheetForm.get('collection').setValue(data.collectionId === null ? '0' : data.collectionId);
      },
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );
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
