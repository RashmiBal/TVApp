import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../src/environments/environment'
import { IFavoriteShow } from '../ifavorite-show';
import {map} from 'rxjs/operators';

/*
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
}*/

interface ITvShowSearchData{
  shows: Array<Show>;
}
export interface Show {
  
    score:number,
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
 
  
@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient:HttpClient) { }

  getTVShowsearchlist(userSearchText: string | number){

    let retreivedObservable  = this.httpClient.get<ITvShowSearchData>
    (`${environment.baseUrl}api.tvmaze.com/search/shows?q=${userSearchText}&appId=${environment.appId}`);

   //retreivedObservable.subscribe(x => console.log("retreived = "+x[0].show.name)); 
//    retreivedObservable.pipe(map(x => console.log("retreived = "+x[0].show.name))); 
//   return retreivedObservable.pipe(map(x => this.transformToIFavoriteShow(x))) 
   return retreivedObservable.pipe(map(x => this.transformToIFavoriteShowsArray(x))) 

/* ORIGINAL--
    return this.httpClient.get<ITvShowSearchData>
    (`${environment.baseUrl}api.tvmaze.com/search/shows?q=${userSearchText}&appId=${environment.appId}`).pipe(
      map(data => this.transformToIFavoriteShow(data))
    )
    */
  }

  private transformToIFavoriteShowsArray(data: ITvShowSearchData): Array<IFavoriteShow>{

    if (data[0] == undefined) return null;


    console.log("retreived "+data[0].show.name)
        //var toRet: IFavoriteShow[]=new Array<IFavoriteShow>();
    var toRet: IFavoriteShow[]=[];
    for (var i=0; (data[i] != undefined) && (data[i].show != undefined)&&((data[i].show != null));i++) {
      console.log("retreived "+data[i].show.name)

      if (data[i].show == undefined) continue;
      if (data[i].show.image == null) continue;
      if (data[i].show.image.medium == null) continue;

      

    toRet.push({
      name: data[i].show.name,
      summary: data[i].show.summary,
      runtime: data[i].show.runtime,
      officialSite: data[i].show.officialSite,
      url: data[i].show.url,
      language: data[i].show.language,
      schedule: data[i].show.schedule.time,
      days: data[i].show.schedule.days[i],
      genres: data[i].show.genres[i],
      image: data[i].show.image.medium
    });
  }



    
    return toRet;
}


private transformToIFavoriteShow(data: ITvShowSearchData): IFavoriteShow{

    if (data[0] == undefined) return null;

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