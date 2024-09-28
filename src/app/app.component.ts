import { Component } from '@angular/core';
import { TopNavbarComponent } from './top-navbar/top-navbar.component'; // Adjust the path
import { SidenavComponent } from './sidenav/sidenav.component'; // Adjust the path
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TopNavbarComponent, SidenavComponent, RouterOutlet], // Include RouterOutlet
})
export class AppComponent {}
