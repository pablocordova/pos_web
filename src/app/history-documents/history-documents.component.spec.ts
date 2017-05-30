import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDocumentsComponent } from './history-documents.component';

describe('HistoryDocumentsComponent', () => {
  let component: HistoryDocumentsComponent;
  let fixture: ComponentFixture<HistoryDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
