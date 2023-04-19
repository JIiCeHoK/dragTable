import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { TableComponentComponent } from './app/components/table-component/table-component.component';


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

// bootstrapApplication(AppComponent)