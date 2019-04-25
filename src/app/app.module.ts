import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTabsModule } from '@angular/material';
import { CollectionsComponent } from './collections/collections.component';
import { CoinsComponent } from './coins/coins.component';
import { DatesComponent } from './dates/dates.component';
import { CategoriesComponent } from './categories/categories.component';
import { SheetsComponent } from './sheets/sheets.component';
import { AlbumsComponent } from './albums/albums.component';
import { BullionMetalsComponent } from './bullion-metals/bullion-metals.component';
import { CataloguesComponent } from './catalogues/catalogues.component';

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
    CataloguesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
