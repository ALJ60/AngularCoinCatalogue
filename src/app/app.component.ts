import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TabLink } from './tab-link';
import { Observable } from 'rxjs';
import { MatTabGroup } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Coins';

  // List of tabs for our tab control with the link URLs to route to
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

  navEnd: Observable<NavigationEnd>;

  selectedTabIndex: number;

  /* We want to change routes based on selected tab but can't use MatTabNav as paging doesn't work when
     the tabs don't all fit on the screen. So we have to use MatTabGroup instead with empty tab contents
     and handle the routing ourselves.
     When the selected tab is changed then this method will route to the new URL.
  */
  tabChanged(index: number) {
    this.router.navigateByUrl(this.tabLinks[index].link);
  }

  constructor(private router: Router) {
    // Create an observable for NavigationEnd router events
    this.navEnd = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {
    // At the end of any route change call the method to select the corresponding tab
    this.navEnd.subscribe(
      evt => this.setActiveTab()
    );
    // Also set the correct tab now based on the current route.
    this.setActiveTab();
  }

  // Method to select the correct tab based on the current route
  setActiveTab() {
    this.selectedTabIndex = this.tabLinks.findIndex(tab => tab.link === this.router.url);
  }

}
