import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarPedido } from './form-registrar-pedido';

describe('FormRegistrarPedido', () => {
  let component: FormRegistrarPedido;
  let fixture: ComponentFixture<FormRegistrarPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistrarPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistrarPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
