import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsearchListComponent } from './tvshowsearch-list.component';

describe('TvshowsearchListComponent', () => {
  let component: TvshowsearchListComponent;
  let fixture: ComponentFixture<TvshowsearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
