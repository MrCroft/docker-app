import { Injectable, Inject } from '@angular/core';


@Injectable()
export class CookieService {
  private cookieStore = {};

  constructor(
    @Inject('req') private readonly req: any,
    @Inject('res') private readonly res: any
  ) {
    if (this.req !== null) {
      this.parseCookies(decodeURIComponent(this.req.cookies)); // On the Server
    } else {
      this.parseCookies(decodeURIComponent(document.cookie)); // In the Browser
    }
  }


  /**
   * Parses `document.cookie` (browser) or `request.headers.cookie` (server)
   * and turns the string into key => value pairs stored in `this.cookieStore`
   *
   * @param {any} cookies
   * @returns
   * @memberof CookieService
   */
  public parseCookies(cookies) {
    this.cookieStore = {};
    if (!!cookies === false) { return; }
    const cookiesArr = cookies.split(';');
    for (const cookie of cookiesArr) {
      const cookieArr = cookie.split('=');
      this.cookieStore[cookieArr[0]] = cookieArr[1];
    }
  }


  /**
   * Returns the value of a single cookie from `this.cookieStore`
   *
   * @param {string} key
   * @returns
   * @memberof CookieService
   */
  get(key: string) {
    return !!this.cookieStore[key] ? this.cookieStore[key] : null;
  }

  set(key: string, value: string) {
    if (this.req === null) {
      document.cookie = `${key}=${value}; path=/`;
    } else {
      // Do it using express response
      this.res.setCookie(key, value, { path: '/' });
    }
  }

}
