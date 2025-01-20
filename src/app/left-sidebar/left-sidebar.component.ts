import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
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
      icon: 'fa fa-book',
      label: 'Media',
      routeLink: 'media'
    },
    {
      icon: 'fa fa-pencil',
      label: 'Products',
      routeLink: 'products'
    },
    {
      icon: 'fa fa-cog',
      label: 'Settings',
      routeLink: 'settings'
    },
    {
      icon: 'fa fa-terminal',
      label: 'Statistics',
      routeLink: 'statistics'
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
