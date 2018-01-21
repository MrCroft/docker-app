import { Component, OnInit, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { SnackBarService } from './core/services/snack-bar.service';

import { ApiVideosService } from './core/services/api-videos.service';
import { AppUpdateService } from './core/services/app-update.service';

import { environment } from '../environments/environment';


@Component({
  selector: 'pdp-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // items; // <<< TransferState
  apiEndPoint = environment.CONFIG.api.root;
  cookieDomain = environment.CONFIG.cookie.domain;

  constructor(
    private appUpdate: AppUpdateService
    // @Inject(PLATFORM_ID) private readonly platformId: any,
    // private injector: Injector,
    // private cache: TransferState, // <<< TransferState
    // private snackBarService: SnackBarService
  ) {}

  updateCheck() {
    this.appUpdate.checkForUpdates();
  }


  ngOnInit() {
    this.appUpdate.checkForUpdates();
  }
}
