import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarComic } from './form-registrar-comic';

describe('FormRegistrarComic', () => {
  let component: FormRegistrarComic;
  let fixture: ComponentFixture<FormRegistrarComic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistrarComic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistrarComic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
