import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchBoxComponent } from './movie-list/search-box/search-box.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieItemComponent } from './movie-list/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchBoxComponent,
    MovieDetailsComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
