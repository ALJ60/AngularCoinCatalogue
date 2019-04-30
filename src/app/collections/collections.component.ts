import { Component, OnInit } from '@angular/core';

import { CollectionService } from '../collection.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[];

  displayedColumns: string[] = ['id', 'collection'];

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.getCollections()
      .subscribe(
        data => this.collections = data,
        error => console.log('Error', error.error)
      );
    }

}
