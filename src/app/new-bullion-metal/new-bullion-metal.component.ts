import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BullionMetalService } from '../bullion-metal.service';
import { MessageService } from '../message.service';

import Config from '../../assets/app-config.json';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-new-bullion-metal',
  templateUrl: './new-bullion-metal.component.html',
  styleUrls: ['./new-bullion-metal.component.css']
})
export class NewBullionMetalComponent implements OnInit {

  saving = false;

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
    private fb: FormBuilder,
    private bullionMetalService: BullionMetalService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.saving = true;
    this.bullionMetalService.createBullionMetal({
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

}
