import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component'; // Adjust path if necessary
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for routing
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidenavComponent, RouterOutlet, TopNavbarComponent], // Include your components here
})
export class AppComponent {
  title = 'Your Application Title';
}
