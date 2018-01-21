import { Component, OnInit } from '@angular/core';

import { ApiVideosService } from '../core/services/api-videos.service';

@Component({
  selector: 'pdp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos = this.apiVideos.getVideos();

  constructor(
    private apiVideos: ApiVideosService
  ) {}

  ngOnInit() {
    // this.apiVideos.getVideos().subscribe();
  }

}
