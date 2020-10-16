import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutsPage } from './abouts.page';

describe('AboutsPage', () => {
  let component: AboutsPage;
  let fixture: ComponentFixture<AboutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
