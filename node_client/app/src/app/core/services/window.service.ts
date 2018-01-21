import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class WindowService {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {}

  get width() {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth;
    } else {
      // Not available Server-Side
      return null;
    }
  }
}
