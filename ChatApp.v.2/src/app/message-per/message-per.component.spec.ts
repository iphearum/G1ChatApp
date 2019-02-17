import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePerComponent } from './message-per.component';

describe('MessagePerComponent', () => {
  let component: MessagePerComponent;
  let fixture: ComponentFixture<MessagePerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
