import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroIMCComponent } from './tela-cadastro-imc.component';

describe('TelaCadastroIMCComponent', () => {
  let component: TelaCadastroIMCComponent;
  let fixture: ComponentFixture<TelaCadastroIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCadastroIMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
