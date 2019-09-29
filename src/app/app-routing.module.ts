import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsComponent } from './collections/collections.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';
import { CoinsComponent } from './coins/coins.component';
import { DatesComponent } from './dates/dates.component';
import { CategoriesComponent } from './categories/categories.component';
import { SheetsComponent } from './sheets/sheets.component';
import { AlbumsComponent } from './albums/albums.component';
import { NewAlbumComponent } from './new-album/new-album.component';
import { EditAlbumComponent  } from './edit-album/edit-album.component';
import { BullionMetalsComponent } from './bullion-metals/bullion-metals.component';
import { CataloguesComponent } from './catalogues/catalogues.component';

const routes: Routes = [
  { path: '', redirectTo: 'collections', pathMatch: 'full' },
  { path: 'collections', component: CollectionsComponent },
  { path: 'collection/new', component: NewCollectionComponent },
  { path: 'collection/edit/:id', component: EditCollectionComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'sheets', component: SheetsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/new', component: NewAlbumComponent },
  { path: 'album/edit/:id', component: EditAlbumComponent },
  { path: 'bullionMetals', component: BullionMetalsComponent },
  { path: 'catalogues', component: CataloguesComponent },
  { path: '**', redirectTo: 'collections' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
