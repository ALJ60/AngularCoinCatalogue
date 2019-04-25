import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabLink } from './tab-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Coins';

  tabLinks: TabLink[] = [
    { label: 'Collections', link: '/collections' },
    { label: 'Coins', link: '/coins' },
    { label: 'Dates', link: '/dates' },
    { label: 'Categories', link: '/categories' },
    { label: 'Sheets', link: '/sheets' },
    { label: 'Albums', link: '/albums' },
    { label: 'Bullion', link: '/bullionMetals' },
    { label: 'Catalogues', link: '/catalogues' }
  ];

  constructor(private router: Router) {}

}
