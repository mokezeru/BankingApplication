import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFailureComponent } from './transfer-failure.component';

describe('TransferFailureComponent', () => {
  let component: TransferFailureComponent;
  let fixture: ComponentFixture<TransferFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
