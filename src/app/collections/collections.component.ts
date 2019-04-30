import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CollectionService } from '../collection.service';
import { Collection } from '../collection';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[];

  displayedColumns: string[] = ['id', 'collection'];

  constructor(
    private collectionService: CollectionService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.collectionService.getCollections()
      .subscribe(
        data => this.collections = data,
        error => this.dialog.open(ErrorDialogComponent, {data: error.error})
      );
    }

}
