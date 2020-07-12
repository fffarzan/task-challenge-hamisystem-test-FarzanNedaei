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
import { MovieDetailsService } from './movie-details/movie-details.service';
import { DataStorageService } from './shared/data-storage.service';
import { MovieListService } from './movie-list/movie-list.service';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
