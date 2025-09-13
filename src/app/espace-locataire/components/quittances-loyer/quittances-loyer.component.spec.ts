import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuittancesLoyerComponent } from './quittances-loyer.component';

describe('QuittancesLoyerComponent', () => {
  let component: QuittancesLoyerComponent;
  let fixture: ComponentFixture<QuittancesLoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuittancesLoyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuittancesLoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
