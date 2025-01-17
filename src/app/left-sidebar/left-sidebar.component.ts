import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  items = [
    {
      icon: 'fal fa-home',
      label: 'Home',
      routeLink: 'dashboard'
    },
    {
      icon: 'fa-file',
      label: 'Pages',
      routeLink: 'pages',
    },
    {
      icon: 'fa-tags',
      label: 'Coupens',
      routeLink: 'coupens'
    },
    {
      icon: 'fa-photo-film',
      label: 'Media',
      routeLink: 'media'
    },
    {
      icon: 'fa-bag-shopping',
      label: 'products',
      routeLink: 'products'
    },
    {
      icon: 'fa-gear',
      label: 'Settings',
      routeLink: 'settings'
    },
    {
      icon: 'fa-chart-simple',
      label: 'Statistics',
      routeLink: 'statistics'
    },
  ];
}
