import { Component } from '@angular/core';
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";

@Component({
  selector: 'app-root',
  imports: [LeftSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
