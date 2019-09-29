import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AlbumService } from '../album.service';
import { MessageService } from '../message.service';
import { CollectionService  } from '../collection.service';
import { Album } from '../album';
import { Collection } from '../collection';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  saving = false;

  collections: Collection[];

  albumForm = this.fb.group({
    album: ['', Validators.required],
    collection: ['0'],
    notes: ['']
  });

  get albumField() {
    return this.albumForm.get('album');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private albumService: AlbumService,
    private messageService: MessageService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.loadCollections();
  }

  onSubmit() {
    this.saving = true;
    this.albumService.createAlbum({
      album: this.albumForm.value.album,
      collectionId: this.albumForm.value.collection,
      notes: this.albumForm.value.notes}).subscribe(
      () => this.returnToList(),
      error => {
        this.messageService.displayHttpError(error);
        this.saving = false;
      }
    );
  }

  returnToList() {
    this.router.navigate(['/albums']);
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
