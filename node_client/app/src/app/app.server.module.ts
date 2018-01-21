import { NgModule, Injectable, Inject } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { Request, Response } from 'express';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

@Injectable()
export class RequestService {
  constructor(@Inject(REQUEST) private request: Request) {}

  get cookies() {
    return !!this.request.headers.cookie ? this.request.headers.cookie : null;
  }
}

@Injectable()
export class ResponseService {
  constructor(@Inject(RESPONSE) private response: Response) {}

  redirect(url: string, code?: number) {
    console.log('== REDIRECTING to [' + url + '] ==');
    // this.response.cookie('user', 'Marian', { path: '/' });
    this.response.append('WWW-Authenticate', 'Authorization required');
    if (!!code && code === 401) {
      this.response.set('Content-Type', 'text/html');
      this.response.status(code).send(`<!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="refresh" content="0; url=/auth/login">
          </head>
          <body>
            <p>Unauthorized. Please <a href="/auth/login">Login</a></p>
          </body>
        </html>`);
    } else if (!!code) {
      return this.response.redirect(code, url);
    } else {
      return this.response.redirect(url);
    }
  }
  setStatus(code: number) {
    console.log('== SETTING STATUS to [' + code + ']==');
    this.response.statusCode = code;
    // this.response.statusMessage = 'Some Status Message';
  }

  setCookie(key: string, value: string) {
    this.response.cookie(key, value, { path: '/' });
  }
}

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    NoopAnimationsModule
  ],
  providers: [
    { provide: 'req', useClass: RequestService },
    { provide: 'res', useClass: ResponseService }
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent]
})
export class AppServerModule {}
