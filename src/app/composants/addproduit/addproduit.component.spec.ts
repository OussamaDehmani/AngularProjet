import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproduitComponent } from './addproduit.component';

describe('AddproduitComponent', () => {
  let component: AddproduitComponent;
  let fixture: ComponentFixture<AddproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
