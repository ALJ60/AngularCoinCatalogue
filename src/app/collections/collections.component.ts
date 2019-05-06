import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CollectionService } from '../collection.service';
import { Collection } from '../collection';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[];

  displayedColumns: string[] = ['collection', 'buttons'];

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
    this.collectionService.getCollections().subscribe(
      data => {
        this.collections = data;
        this.loading = false;
      },
      error => {
        this.dialog.open(MessageDialogComponent, {data: {heading: 'Error', message: error.error}});
        this.loading = false;
      }
    );
  }

  deleteCollection(collection: Collection) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        heading: 'Are you sure?',
        message: `Are you sure you want to delete collection '${collection.collection}'?`
      }
    }).afterClosed().subscribe(
      confirm => {
        if (confirm) {
          this.loading = true;
          this.collectionService.deleteCollection(collection.id).subscribe(
            () => this.loadCollections(),
            error => {
              this.dialog.open(MessageDialogComponent, {data: {heading: 'Error', message: error.error}});
              this.loading = false;
            }
          );
        }
      }
    );
  }

}
