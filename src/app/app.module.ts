import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackNameComponent } from './track-name/track-name.component';

import { HttpClientModule } from '@angular/common/http';
import { RandomImageService } from './config/random-image.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RandomImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
