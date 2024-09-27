import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path if necessary
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/home/home.component'; // Adjust the path as necessary


// import { environment } from './environments/environment'; // Import environment if needed

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot([
      { path: '', component: HomeComponent }, // Define your home route here
    ]))
  ]
}).catch(err => console.error(err));
