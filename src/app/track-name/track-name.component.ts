import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-name',
  templateUrl: './track-name.component.html',
  styleUrls: ['./track-name.component.css']
})
export class TrackNameComponent implements OnInit {
  trackName = "";
  constructor() { }

  ngOnInit(): void {
  }
  changed(event: any){
    console.log(this.trackName);
    this.trackName=event.target.value;
  }

  hide(){
    console.log("hide")
  }

}
