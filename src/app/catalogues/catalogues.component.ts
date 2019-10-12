import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { CatalogueEditionService } from '../catalogue-edition.service';
import { MessageService } from '../message.service';
import { CatalogueEdition } from '../catalogue-edition';

@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrls: ['./catalogues.component.css']
})
export class CataloguesComponent implements OnInit {

  dataSource = new MatTableDataSource<CatalogueEdition>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['catalogue', 'edition', 'buttons'];

  loading = true;

  constructor(
    private catalogueEditionService: CatalogueEditionService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadCatalogueEditions();
  }

  loadCatalogueEditions() {
    this.loading = true;
    this.catalogueEditionService.getCatalogueEditions().subscribe(
      data => {
        this.dataSource.data = data;
        this.loading = false;
      },
      error => {
        this.messageService.displayHttpError(error);
        this.loading = false;
      }
    );
  }

  deleteCatalogueEdition(catalogueEdition: CatalogueEdition) {
    this.messageService.confirm(
      'Are you sure?',
      `Are you sure you want to delete catalogue '${CatalogueEdition.fullName(catalogueEdition)}'?`
      ).subscribe(
      confirm => {
        if (confirm) {
          this.loading = true;
          this.catalogueEditionService.deleteCatalogueEdition(catalogueEdition.id).subscribe(
            () => this.loadCatalogueEditions(),
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
