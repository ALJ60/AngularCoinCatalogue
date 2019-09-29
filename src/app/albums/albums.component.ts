import { Component, OnInit } from '@angular/core';

import { AlbumService } from '../album.service';
import { MessageService } from '../message.service';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];

  displayedColumns: string[] = ['album', 'collection', 'notes', 'buttons'];

  loading = true;

  constructor(
    private albumService: AlbumService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.loading = true;
    this.albumService.getAlbums().subscribe(
      data => {
        this.albums = data;
        this.loading = false;
      },
      error => {
        this.messageService.displayHttpError(error);
        this.loading = false;
      }
    );
  }

  deleteAlbum(album: Album) {
    this.messageService.confirm(
      'Are you sure?',
      `Are you sure you want to delete album '${album.album}'?`
      ).subscribe(
      confirm => {
        if (confirm) {
          this.loading = true;
          this.albumService.deleteAlbum(album.id).subscribe(
            () => this.loadAlbums(),
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
