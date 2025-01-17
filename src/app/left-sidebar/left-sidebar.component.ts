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
      icon: 'fal fa-file',
      label: 'Pages',
      routeLink: 'pages',
    },
    {
      icon: 'fal fa-tags',
      label: 'Coupens',
      routeLink: 'coupens'
    },
    {
      icon: 'fal fa-photo-film',
      label: 'Media',
      routeLink: 'media'
    },
    {
      icon: 'fal fa-bag-shopping',
      label: 'products',
      routeLink: 'products'
    },
    {
      icon: 'fal fa-gear',
      label: 'Settings',
      routeLink: 'settings'
    },
    {
      icon: 'fal fa-chart-simple',
      label: 'Statistics',
      routeLink: 'statistics'
    },
  ];
}
