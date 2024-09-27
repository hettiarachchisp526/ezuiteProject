import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [CommonModule], // Add CommonModule to imports
})
export class SidenavComponent {
  isCollapsed = false;

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
