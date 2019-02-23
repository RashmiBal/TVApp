import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
