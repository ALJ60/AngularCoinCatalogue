import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TabLink } from './tab-link';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Coins';

  // List of tabs for our tab control with the link URLs to route to
  tabLinks: TabLink[] = [
    { label: 'Collections', link: '/collections', match: '/collection' },
    { label: 'Coins', link: '/coins', match: '/coin' },
    { label: 'Dates', link: '/dates', match: '/date' },
    { label: 'Categories', link: '/categories', match: '/category' },
    { label: 'Sheets', link: '/sheets', match: '/sheet' },
    { label: 'Albums', link: '/albums', match: '/album' },
    { label: 'Bullion', link: '/bullionMetals', match: '/bullionMetal' },
    { label: 'Catalogues', link: '/catalogues', match: '/catalogue' }
  ];

  navEnd: Observable<NavigationEnd>;

  selectedTabIndex: number;

  /* We want to change routes based on selected tab but can't use MatTabNav as paging doesn't work when
     the tabs don't all fit on the screen. So we have to use MatTabGroup instead with empty tab contents
     and handle the routing ourselves.
     When the selected tab is changed then this method will route to the new URL.
     However, if someone manually navigates for example to /album/new then our code that runs when the route changes
     will update the tab index which would then cause this code to run causing it to re-route to /albums.
     To prevent this from happening then we should only route to the new tab when the index is different to the expected
     index for the current URL.
  */
  tabChanged(index: number) {
    if (index !== this.findTabIndex()) {
      this.router.navigateByUrl(this.tabLinks[index].link);
    }
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
    this.selectedTabIndex = this.findTabIndex();
  }

  findTabIndex(): number {
    let index: number = this.tabLinks.findIndex(tab => tab.link === this.router.url);
    if (index === -1) {
      index = this.tabLinks.findIndex(tab => this.router.url.startsWith(tab.match));
    }
    return index;
  }

}
