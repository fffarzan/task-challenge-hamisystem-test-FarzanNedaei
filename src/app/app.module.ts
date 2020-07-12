import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchBoxComponent } from './movie-list/search-box/search-box.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieItemComponent } from './movie-list/movie-item/movie-item.component';
import { PaginationComponent } from './movie-list/pagination/pagination.component';
import { RatingComponent } from './movie-details/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchBoxComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    PaginationComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
