import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBuscaComponent } from './tela-busca.component';

describe('TelaBuscaComponent', () => {
  let component: TelaBuscaComponent;
  let fixture: ComponentFixture<TelaBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
