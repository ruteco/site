import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  navMenu = [
    {
      name: 'About',
      link: '/About'
    },
    {
      name: 'Portfolio',
      link: '/Portfolio'
    },
    {
      name: 'Process',
      link: '/Process'
    },
    {
      name: 'Contact us',
      link: '/ContactUs'
    }
];
}
