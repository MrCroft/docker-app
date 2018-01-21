import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { PrebootModule } from 'preboot';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'pdpApp' }),
    // PrebootModule.withConfig({ appRoot: 'pdp-app-root' }),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production && environment.CONFIG.serviceWorker.enabled }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production && environment.serviceWorker.enabled }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    CoreModule,
    SharedModule,
    AppRoutingModule // << needs to be after all Modules that have routing
  ],
  providers: [
    { provide: 'req', useValue: null },
    { provide: 'res', useValue: null },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
