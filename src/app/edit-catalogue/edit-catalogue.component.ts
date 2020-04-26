import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CatalogueService } from '../catalogue.service';
import { CatalogueEditionService } from '../catalogue-edition.service';
import { MessageService } from '../message.service';
import { Catalogue } from '../catalogue';

@Component({
  selector: 'app-edit-catalogue',
  templateUrl: './edit-catalogue.component.html',
  styleUrls: ['./edit-catalogue.component.css']
})
export class EditCatalogueComponent implements OnInit {

  saving = false;

  id: number;

  catalogues: Catalogue[];

  catalogueForm = this.fb.group({
    catalogue: [''],
    editCatalogueName: [false],
    catalogueName: ['', Validators.required],
    edition: ['']
  });

  get catalogueField() {
    return this.catalogueForm.get('catalogue');
  }

  get catalogueNameField() {
    return this.catalogueForm.get('catalogueName');
  }

  get editCatalogueNameField() {
    return this.catalogueForm.get('editCatalogueName');
  }

  get editionField() {
    return this.catalogueForm.get('edition');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private catalogueService: CatalogueService,
    private catalogueEditionService: CatalogueEditionService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.watchCatalogue();
    this.watchEditCataLogue();
    this.loadCatalogueEdition();
    this.loadCatalogues();
  }

  onSubmit() {
    this.saving = true;
    this.catalogueEditionService.updateCatalogueEdition({
      id: this.id,
      catalogue: {
        id: this.catalogueForm.value.catalogue === '-1' ? 0 : this.catalogueForm.value.catalogue,
        catalogue:
          (this.catalogueForm.value.catalogue === '-1' || this.catalogueForm.value.editCatalogueName) ?
          this.catalogueForm.value.catalogueName : ''
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

  watchCatalogue() {
    this.catalogueField.valueChanges.subscribe(
      (id) => {
        if (id === '-1') {
          this.catalogueNameField.setValue('');
          this.catalogueNameField.enable();
        } else {
          this.editCatalogueNameField.setValue(false);
          this.catalogueNameField.disable();
        }
      }
    );
  }

  watchEditCataLogue() {
    this.editCatalogueNameField.valueChanges.subscribe(
      (checked) => {
        if (checked) {
          this.catalogueService.getCatalogue(this.catalogueField.value).subscribe(
            data => {
              this.catalogueNameField.setValue(data.catalogue);
              this.catalogueNameField.enable();
            },
            error => {
              this.messageService.displayHttpError(error);
              this.editCatalogueNameField.setValue(false);
            }
          );
        } else if (this.catalogueField.value > -1) {
          this.catalogueNameField.disable();
        }
      }
    );
  }

  returnToList() {
    this.router.navigate(['/catalogues']);
  }

  loadCatalogueEdition() {
    this.catalogueEditionService.getCatalogueEdition(this.id).subscribe(
      data => {
        this.catalogueField.setValue(data.catalogue.id);
        this.editionField.setValue(data.edition);
      },
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );
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
