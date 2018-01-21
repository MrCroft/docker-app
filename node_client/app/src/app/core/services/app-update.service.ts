import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';

import { Subscription } from 'rxjs/Subscription';

import { SnackBarService } from './snack-bar.service';

@Injectable()
export class AppUpdateService {
  private swUpdate;
  private updateSubscription: Subscription;

  constructor(
    private injector: Injector,
    private snackBar: SnackBarService,
    @Inject(PLATFORM_ID) private readonly platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.swUpdate = this.injector.get(SwUpdate);
    }
  }


  /**
   * Subscribe to ServiceWorker update check event and flash message to
   * refresh the page in order to get the new version of the app
   */
  checkForUpdates() {
    if (!!this.swUpdate && this.swUpdate.isEnabled) {
      this.updateSubscription = this.swUpdate.available.subscribe((event) => {
        this.snackBar.flashMessage('Update is available!', ['snack-info'], 'Reload', 0, true);
      });
      this.swUpdate.checkForUpdate().then(
        () => {
          this.updateSubscription.unsubscribe();
        }
      ).catch(
        (e) => {
          console.log('-- SW ERR: ', e);
          // this.snackBar.flashMessage('Could not check!', ['snack-error'], 'x', 0);
        }
      );
    }
  }

  updateNow() {}
}
