import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaListaComponent } from './tela-lista.component';

describe('TelaListaComponent', () => {
  let component: TelaListaComponent;
  let fixture: ComponentFixture<TelaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
