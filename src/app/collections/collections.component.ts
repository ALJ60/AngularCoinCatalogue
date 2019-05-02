import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CollectionService } from '../collection.service';
import { Collection } from '../collection';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[];

  displayedColumns: string[] = ['id', 'collection', 'buttons'];

  loading = true;

  constructor(
    private collectionService: CollectionService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.loadCollections();
  }

  loadCollections() {
    this.loading = true;
    this.collectionService.getCollections()
      .subscribe(
        data => {
          this.collections = data;
          this.loading = false;
        },
        error => this.dialog.open(MessageDialogComponent, {data: {heading: 'Error', message: error.error}})
      );
  }

  editCollection(id: number) {
    console.log('Edit', id);
  }

  deleteCollection(id: number) {
    console.log('Delete', id);
  }

  newCollection() {
    console.log('New');
  }

}
