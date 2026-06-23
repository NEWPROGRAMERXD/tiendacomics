import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComics } from './form-comics';

describe('FormComics', () => {
  let component: FormComics;
  let fixture: ComponentFixture<FormComics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
