import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaPage } from './resta.page';

describe('RestaPage', () => {
  let component: RestaPage;
  let fixture: ComponentFixture<RestaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
