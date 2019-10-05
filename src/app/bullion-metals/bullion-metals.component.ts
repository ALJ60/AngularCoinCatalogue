import { Component, OnInit } from '@angular/core';

import { BullionMetalService } from '../bullion-metal.service';
import { MessageService } from '../message.service';
import { BullionMetal } from '../bullion-metal';

import Config from '../../assets/app-config.json';

@Component({
  selector: 'app-bullion-metals',
  templateUrl: './bullion-metals.component.html',
  styleUrls: ['./bullion-metals.component.css']
})
export class BullionMetalsComponent implements OnInit {

  bullionMetals: BullionMetal[];

  displayedColumns: string[] = ['metal', 'price', 'date', 'buttons'];

  loading = true;

  constructor(
    private bullionMetalService: BullionMetalService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.loadBullionMetals();
  }

  get currency(): string {
    return Config.currency;
  }

  loadBullionMetals() {
    this.loading = true;
    this.bullionMetalService.getBullionMetals().subscribe(
      data => {
        this.bullionMetals = data;
        this.loading = false;
      },
      error => {
        this.messageService.displayHttpError(error);
        this.loading = false;
      }
    );
  }

  deleteBullionMetal(bullionMetal: BullionMetal) {
    this.messageService.confirm(
      'Are you sure?',
      `Are you sure you want to delete bullion metal '${bullionMetal.metal}'?`
      ).subscribe(
      confirm => {
        if (confirm) {
          this.loading = true;
          this.bullionMetalService.deleteBullionMetal(bullionMetal.id).subscribe(
            () => this.loadBullionMetals(),
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
