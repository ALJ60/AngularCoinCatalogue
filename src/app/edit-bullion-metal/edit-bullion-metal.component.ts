import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BullionMetalService } from '../bullion-metal.service';
import { MessageService } from '../message.service';

import Config from '../../assets/app-config.json';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-edit-bullion-metal',
  templateUrl: './edit-bullion-metal.component.html',
  styleUrls: ['./edit-bullion-metal.component.css']
})
export class EditBullionMetalComponent implements OnInit {

  saving = false;

  id: number;

  bullionMetalForm = this.fb.group({
    metal: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0.01), Validators.max(9999.99)]]
  });

  get metalField() {
    return this.bullionMetalForm.get('metal');
  }

  get priceField() {
    return this.bullionMetalForm.get('price');
  }

  get priceError() {
    if (this.priceField.hasError('required')) {
      return 'Price is required and must be a number';
    } else if (this.priceField.hasError('min') || this.priceField.hasError('max')) {
      return 'Price must be positive and less than 10000';
    } else {
      return '';
    }
  }

  get currencySymbol(): string {
    return getCurrencySymbol(Config.currency, 'narrow');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bullionMetalService: BullionMetalService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadBullionMetal();
  }

  onSubmit() {
    this.saving = true;
    this.bullionMetalService.updateBullionMetal({
      id: this.id,
      metal: this.bullionMetalForm.value.metal,
      price: this.bullionMetalForm.value.price}).subscribe(
      () => this.returnToList(),
      error => {
        this.messageService.displayHttpError(error);
        this.saving = false;
      }
    );
  }

  returnToList() {
    this.router.navigate(['/bullionMetals']);
  }

  loadBullionMetal() {
    this.bullionMetalService.getBullionMetal(this.id).subscribe(
      data => {
        this.metalField.setValue(data.metal);
        this.bullionMetalForm.get('price').setValue(data.price);
      },
      error => {
        this.messageService.displayHttpError(error);
        this.returnToList();
      }
    );

  }

}
