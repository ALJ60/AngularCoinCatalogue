import { Component, OnInit } from '@angular/core';

import { CollectionService } from '../collection.service';
import { MessageService } from '../message.service';
import { Collection } from '../collection';

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
    private messageService: MessageService
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
        this.messageService.displayHttpError(error);
        this.loading = false;
      }
    );
  }

  deleteCollection(collection: Collection) {
    this.messageService.confirm(
      'Are you sure?',
      `Are you sure you want to delete collection '${collection.collection}'?`
      ).subscribe(
      confirm => {
        if (confirm) {
          this.loading = true;
          this.collectionService.deleteCollection(collection.id).subscribe(
            () => this.loadCollections(),
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
