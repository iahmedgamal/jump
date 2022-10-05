import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Root } from './models/root';

// Root

@Injectable()
export class RandomImageService {
  accessKey = 'pVsUuikCp69QhfcJ4V7jQKY-As6DICJjnux1tLzBeD8';
  UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${this.accessKey}`;

  private image: string = '';

  constructor(private http: HttpClient) {
    this.getImageUrls().subscribe((results: Root) => {
      this.image = results.urls.full;
    });
  }

  public getRandomImage(): string {
    return this.image;
  }

  public getImageUrls(): Observable<Root> {
    return this.http
      .get<any>(this.UNSPLASH_URL)
      .pipe(map((response: Root) => response));
  }
}
