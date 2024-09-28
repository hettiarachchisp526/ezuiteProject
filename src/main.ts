import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path as necessary
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DealsComponent } from './app/deals/deals.component'; // Adjust the path
import { SidenavComponent } from './app/sidenav/sidenav.component'; // Adjust the path

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: 'deals', component: DealsComponent }, // Add route for DealsComponent
        { path: '', redirectTo: '/deals', pathMatch: 'full' }, // Default route
      ])
    )
  ]
}).catch(err => console.error(err));
