import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfournisseurComponent } from './addfournisseur.component';

describe('AddfournisseurComponent', () => {
  let component: AddfournisseurComponent;
  let fixture: ComponentFixture<AddfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
