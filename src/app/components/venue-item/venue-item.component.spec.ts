import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueItemComponent } from './venue-item.component';

describe('VenueListItemComponent', () => {
  let component: VenueItemComponent;
  let fixture: ComponentFixture<VenueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
