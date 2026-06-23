import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualizarComic } from './form-actualizar-comic';

describe('FormActualizarComic', () => {
  let component: FormActualizarComic;
  let fixture: ComponentFixture<FormActualizarComic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormActualizarComic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormActualizarComic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
