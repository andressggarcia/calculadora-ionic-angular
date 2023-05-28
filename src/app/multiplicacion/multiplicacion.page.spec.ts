import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicacionPage } from './multiplicacion.page';

describe('MultiplicacionPage', () => {
  let component: MultiplicacionPage;
  let fixture: ComponentFixture<MultiplicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultiplicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
