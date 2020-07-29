import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixCardComponent } from './matrix-card.component';

describe('MatrixCardComponent', () => {
  let component: MatrixCardComponent;
  let fixture: ComponentFixture<MatrixCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
