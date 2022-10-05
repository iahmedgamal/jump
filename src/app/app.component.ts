import { Component } from '@angular/core';
import { Root } from './config/models/root';
import { RandomImageService } from './config/random-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jump-start';
  randomImage = ""
  randomImageService: any;
  id : any
  constructor(randomImageService :RandomImageService){
    this.randomImageService= randomImageService
    document.body.style.backgroundColor = "#F0CF65";

  }

    getTheImage() {
    this.randomImageService.getImageUrls().subscribe(
      (results: Root) => {
          this.randomImage= results.urls.regular
          document.body.style.backgroundColor = results.color
      }
    )
  }

  ngOnInit() {
    this.getTheImage();
    this.id = setInterval(() => {
      this.getTheImage(); 
    }, 60000);
  }
  
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
