import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryListingsComponent } from './entry-listings.component';

describe('EntryListingsComponent', () => {
  let component: EntryListingsComponent;
  let fixture: ComponentFixture<EntryListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
