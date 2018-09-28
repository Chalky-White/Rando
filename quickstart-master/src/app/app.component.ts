import { Component } from '@angular/core';
import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  hikes: Hike[];

  constructor(private _hikeService: HikeService) {

  }

  ngOnInit() {
    this.hikes = this._hikeService.getHikes();
    console.log(this.hikes);
  }

}
