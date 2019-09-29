import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule
} from '@angular/material';
import { CollectionsComponent } from './collections/collections.component';
import { CoinsComponent } from './coins/coins.component';
import { DatesComponent } from './dates/dates.component';
import { CategoriesComponent } from './categories/categories.component';
import { SheetsComponent } from './sheets/sheets.component';
import { AlbumsComponent } from './albums/albums.component';
import { BullionMetalsComponent } from './bullion-metals/bullion-metals.component';
import { CataloguesComponent } from './catalogues/catalogues.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';
import { NewAlbumComponent } from './new-album/new-album.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CoinsComponent,
    DatesComponent,
    CategoriesComponent,
    SheetsComponent,
    AlbumsComponent,
    BullionMetalsComponent,
    CataloguesComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    NewCollectionComponent,
    EditCollectionComponent,
    NewAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MessageDialogComponent,
    ConfirmDialogComponent
  ]
})
export class AppModule { }
