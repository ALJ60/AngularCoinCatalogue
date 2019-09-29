import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CollectionService } from '../collection.service';
import { MessageService } from '../message.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.css']
})
export class EditCollectionComponent implements OnInit {

  saving = false;

  id: number;

  collections: Collection[];

  collectionForm = this.fb.group({
    collection: ['', Validators.required],
    sortOrder: ['-1']
  });

  get collectionField() {
    return this.collectionForm.get('collection');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private collectionService: CollectionService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadCollection();
    this.loadCollections();
  }

  onSubmit() {
    this.saving = true;
    this.collectionService.updateCollection({
      id: this.id,
      collection: this.collectionForm.value.collection,
      sortOrder: +this.collectionForm.value.sortOrder}).subscribe(
      () => this.returnToList(),
      error => {
        this.messageService.displayHttpError(error);
        this.saving = false;
      }
    );
  }

  returnToList() {
    this.router.navigate(['/collections']);
  }

  loadCollection() {
    this.collectionService.getCollection(this.id).subscribe(
      data => this.collectionField.setValue(data.collection),
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );
  }

  loadCollections() {
    this.collectionService.getCollections().subscribe(
      data => this.collections = data.filter(collection => +collection.id !== this.id),
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );
  }

}
