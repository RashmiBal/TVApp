import { Component, OnInit, Input } from '@angular/core';
import { IFavoriteShow } from '../ifavorite-show';
import { TvshowService } from '../tvshow/tvshow.service';

@Component({
  selector: 'app-tvshowsearch-list',
  templateUrl: './tvshowsearch-list.component.html',
  styleUrls: ['./tvshowsearch-list.component.css']
})
export class TvshowsearchListComponent implements OnInit {

  @Input() current: IFavoriteShow;
  constructor() {
   }

  ngOnInit() {
    
  }

}
