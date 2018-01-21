import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiVideosService {
  private apiEndPoint = environment.CONFIG.api.root;
  private VIDEOS_LIST_CACHE;

  constructor(
    private http: HttpClient,
    private cache: TransferState
  ) {}


  /**
   * Get videos
   *
   * @returns {Observable<any>}
   * @memberof ApiVideosService
   */
  getVideos(): Observable<any> {
    const VIDEOS_LIST_KEY = makeStateKey('videos_list');
    if (this.cache.hasKey(VIDEOS_LIST_KEY)) {
      this.VIDEOS_LIST_CACHE = this.cache.get(VIDEOS_LIST_KEY, null);
      this.cache.remove(VIDEOS_LIST_KEY);
      console.log('-- TransferState: VIDEOS FROM CACHE', this.VIDEOS_LIST_CACHE);
      return Observable.of(this.VIDEOS_LIST_CACHE);
    } else {
      console.log('-- TransferState: NO VIDEOS IN CACHE. Trying: ', this.apiEndPoint + '/videos');
      return this.http.get(this.apiEndPoint + '/videos')
        .do((res) => {
          // console.log('-- THE VIDEOS: ', res);
          this.cache.onSerialize(VIDEOS_LIST_KEY, () => {
            return res;
          });
        })
        .catch(err => {
          console.log('-- THE ERROR: ', err);
          return Observable.of(err);
        });
    }
    // return this.http.get(this.apiEndPoint + '/videos')
    //   // .do((res) => {
    //   //   console.log('-- RES: ', res);
    //   // })
    //   .catch(err => {
    //     return Observable.of(err);
    //   });
  }

}
