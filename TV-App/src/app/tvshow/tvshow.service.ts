import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../src/environments/environment'
import { IFavoriteShow } from '../ifavorite-show';
import {map} from 'rxjs/operators';

interface ITvShowSearchData{
  0:{  
    show: {
      name: string
      summary: string
      runtime: number
      officialSite: string
      url: string
      language: string
      genres: [string]
      image: {
        medium: string}
      schedule: {
        time: string, 
        days: [string]
      }
    } 
  }
}

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient:HttpClient) { }

  getTVShowsearchlist(userSearchText: string | number){
    return this.httpClient.get<ITvShowSearchData>
    (`${environment.baseUrl}api.tvmaze.com/search/shows?q=${userSearchText}&appId=${environment.appId}`).pipe(
      map(data => this.transformToIFavoriteShow(data))
    )
  }

  private transformToIFavoriteShow(data: ITvShowSearchData): IFavoriteShow{
    return {
      name: data[0].show.name,
      summary: data[0].show.summary,
      runtime: data[0].show.runtime,
      officialSite: data[0].show.officialSite,
      url: data[0].show.url,
      language: data[0].show.language,
      schedule: data[0].show.schedule.time,
      days: data[0].show.schedule.days[0],
      genres: data[0].show.genres[0],
      image: data[0].show.image.medium
    }
}
}