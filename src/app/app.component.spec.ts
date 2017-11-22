import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [AppComponent],
      imports: [RouterTestingModule]

=======
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
<<<<<<< HEAD

=======
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89
});
