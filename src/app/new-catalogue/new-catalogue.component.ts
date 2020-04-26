import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CatalogueService } from '../catalogue.service';
import { CatalogueEditionService } from '../catalogue-edition.service';
import { MessageService } from '../message.service';
import { Catalogue } from '../catalogue';

@Component({
  selector: 'app-new-catalogue',
  templateUrl: './new-catalogue.component.html',
  styleUrls: ['./new-catalogue.component.css']
})
export class NewCatalogueComponent implements OnInit {

  saving = false;

  catalogues: Catalogue[];

  catalogueForm = this.fb.group({
    catalogue: ['', Validators.required],
    catalogueName: ['', Validators.required],
    edition: ['']
  });

  get catalogueField() {
    return this.catalogueForm.get('catalogue');
  }

  get catalogueNameField() {
    return this.catalogueForm.get('catalogueName');
  }

  get editionField() {
    return this.catalogueForm.get('edition');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private catalogueService: CatalogueService,
    private catalogueEditionService: CatalogueEditionService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.loadCatalogues();
    this.enableDisableCatName();
  }

  enableDisableCatName() {
    this.catalogueField.valueChanges.subscribe(
      (id) => {
        if (id === '-1') {
          this.catalogueNameField.enable();
        } else {
          this.catalogueNameField.disable();
        }
      }
    );
  }

  onSubmit() {
    this.saving = true;
    this.catalogueEditionService.createCatalogueEdition({
      catalogue: {
        id: this.catalogueForm.value.catalogue === '-1' ? 0 : this.catalogueForm.value.catalogue,
        catalogue: this.catalogueForm.value.catalogueName
      },
      edition: this.catalogueForm.value.edition
    }).subscribe(
      () => this.returnToList(),
      error => {
        this.messageService.displayHttpError(error);
        this.saving = false;
      }
    );
  }

  returnToList() {
    this.router.navigate(['/catalogues']);
  }

  loadCatalogues() {
    this.catalogueService.getCatalogues().subscribe(
      data => this.catalogues = data,
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );
  }
}
