import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {UserDataService} from '../services/user-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UserDataService} from '../services/user-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89

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
<<<<<<< HEAD
      imports: [FormsModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [
        // UserDataService,
        HttpClient,
        HttpHandler]
=======
      imports: [
        FormsModule,
      RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: HttpClient,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        UserDataService
      ]
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89
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
<<<<<<< HEAD
 ****/
=======


>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89
