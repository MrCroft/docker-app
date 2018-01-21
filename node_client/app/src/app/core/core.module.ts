import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppUpdateService } from './services/app-update.service';
import { ApiVideosService } from './services/api-videos.service';
import { SnackBarService } from './services/snack-bar.service';
import { CookieService } from './services/cookie.service';
import { WindowService } from './services/window.service';

@NgModule({
  imports: [CommonModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    AppUpdateService,
    CookieService,
    WindowService,
    SnackBarService,
    ApiVideosService
  ]
})
export class CoreModule {}
