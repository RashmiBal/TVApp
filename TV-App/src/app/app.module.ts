import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvshowsearchListComponent } from './tvshowsearch-list/tvshowsearch-list.component';
import { TvshowService } from './tvshow/tvshow.service';
import {HttpClientModule} from '@angular/common/http';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TvshowsearchListComponent,
    TvShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
