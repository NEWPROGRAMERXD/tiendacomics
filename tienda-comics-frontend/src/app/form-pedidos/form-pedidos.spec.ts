import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPedidos } from './form-pedidos';

describe('FormPedidos', () => {
  let component: FormPedidos;
  let fixture: ComponentFixture<FormPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
