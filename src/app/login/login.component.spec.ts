import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UserDataService} from '../services/user-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
         declarations: [ LoginComponent ],
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
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css('button'));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('#Setting loading to true disables the submit button', () => {
    component.loading = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('#Setting loading to false enables the submit button', () => {
    component.loading = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

});
