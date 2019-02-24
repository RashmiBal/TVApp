import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../src/environments/environment'


interface ITvShowSearchData{
    score: number
    show: {
      name: string
      summary: string
      runtime: number
      officialSite: string
      schedule: {
        time: string
        days: [string]
      }
    }
}

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient:HttpClient) { }

  getTVShowsearchlist(userSearchText: string){
    return this.httpClient.get<ITvShowSearchData>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${userSearchText}&appid=${environment.appId}`)
  }
}
