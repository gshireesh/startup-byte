import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaListComponent } from './ama-list.component';

describe('AmaListComponent', () => {
  let component: AmaListComponent;
  let fixture: ComponentFixture<AmaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
