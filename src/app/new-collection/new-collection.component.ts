import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CollectionService } from '../collection.service';
import { MessageService } from '../message.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent implements OnInit {

  saving = false;

  collectionForm = this.fb.group({
    collection: ['', Validators.required],
    sortOrder: ['', Validators.required]
  });

  collections: Collection[];

  get collection() {
    return this.collectionForm.get('collection');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private collectionService: CollectionService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.loadCollections();
  }

  onSubmit() {
    this.saving = true;
    this.collectionService.createCollection({
      collection: this.collectionForm.value.collection,
      sortOrder: +this.collectionForm.value.sortOrder}).subscribe(
      () => this.router.navigate(['/collections']),
      error => {
        this.messageService.displayHttpError(error);
        this.saving = false;
      }
    );
  }

  loadCollections() {
    this.collectionService.getCollections().subscribe(
      data => {
        this.collections = data;
        if (this.collections.length === 0) {
          this.collectionForm.get('sortOrder').setValue('0');
        }
      },
      error => this.messageService.displayHttpError(error)
    );
  }

}
