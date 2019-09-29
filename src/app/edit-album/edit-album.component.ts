import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AlbumService } from '../album.service';
import { MessageService } from '../message.service';
import { CollectionService  } from '../collection.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {

  saving = false;

  id: number;

  collections: Collection[];

  albumForm = this.fb.group({
    album: ['', Validators.required],
    collection: [''],
    notes: ['']
  });

  get albumField() {
    return this.albumForm.get('album');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private albumService: AlbumService,
    private messageService: MessageService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadAlbum();
    this.loadCollections();
  }

  onSubmit() {
    this.saving = true;
    this.albumService.updateAlbum({
      id: this.id,
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

  loadAlbum() {
    this.albumService.getAlbum(this.id).subscribe(
      data => {
        this.albumField.setValue(data.album);
        this.albumForm.get('collection').setValue(data.collectionId === null ? '0' : data.collectionId);
        this.albumForm.get('notes').setValue(data.notes);
      },
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
