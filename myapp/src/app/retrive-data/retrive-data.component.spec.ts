import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetriveDataComponent } from './retrive-data.component';

describe('RetriveDataComponent', () => {
  let component: RetriveDataComponent;
  let fixture: ComponentFixture<RetriveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetriveDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetriveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
