import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {UserDataService} from '../services/user-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/***
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  const userDataServiceStub = {
    isUserLoggedIn: true,
    user: { name: 'Test User'}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [
        // UserDataService,
        HttpClient,
        HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
   TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:    [ {provide: UserDataService, useValue: userDataServiceStub } ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component    = fixture.componentInstance;

    // UserService from the root injector
    userDataService = fixture.debugElement.injector.get(UserDataService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');
  });

  it('should request login if not logged in', () => {
    UserDataService.isUserLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });
});
 ****/
