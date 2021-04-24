import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoloyComponent } from './portfoloy.component';

describe('PortfoloyComponent', () => {
  let component: PortfoloyComponent;
  let fixture: ComponentFixture<PortfoloyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoloyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoloyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
