import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AchievementService} from '../services/achievement.service';
import {UserDataService} from '../services/user-data.service';
import { AchievementComponent } from './achievement.component';

describe('AchievementComponent', () => {
  let component: AchievementComponent;
  let fixture: ComponentFixture<AchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementComponent ],
      providers: [UserDataService, AchievementService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});

