import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UpgradeComponent} from './upgrade.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UpgradeService} from '../services/upgrade.service';
import {UserDataService} from '../services/user-data.service';
import {SimpleChange} from '@angular/core';
import {By} from '@angular/platform-browser';

class MockUpgradeService {
  public upgrades: Array<object> = [
    {
      id: 0,
      title: 'Test Title',
      unlocks: {
        unit: 'c',
        count: 20
      },
      upgrade: {
        unit: 'mc',
        operator: '*',
        operand: 2
      },
      img: '../assets/img/upgrades/shake.svg',
      description: 'Test Desc',
      _id: '1234567890'
    }
  ];

  getAllUpgrades() {
    return this.upgrades;
  }
}

class MockUserDataService {
  public userData = [
    {
      _id: '0123456789',
      data: {
        upgrades: [],
      }
    }
  ];

  addUpgrade(user, id) {
    this.userData[0].data.upgrades.push(id);
  }
}

describe('UpgradeComponent', () => {
  let component: UpgradeComponent;
  let fixture: ComponentFixture<UpgradeComponent>;
  let upgradeService: UpgradeService;
  let userDataService: UserDataService;
  let debugElementUpgrades;
  let nativeElementUpgrades;

  async function changeParameter(distance: number, clickCount: number, upgrades: Array<number>) {
    component.distance = distance;
    component.clickCount = clickCount;
    component.userData = {
      data: {
        upgrades: upgrades
      }
    };
    await fixture.detectChanges();
    component.ngOnChanges({
      userData: new SimpleChange(null, component.userData, false)
    });
    fixture.detectChanges();
    debugElementUpgrades = await fixture.debugElement.query(By.css('.upgrade-container'));
    nativeElementUpgrades = debugElementUpgrades.nativeElement;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpgradeComponent],
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
        {provide: UpgradeService, useClass: MockUpgradeService},
        {provide: UserDataService, useClass: MockUserDataService},
      ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(UpgradeComponent);
    component = fixture.componentInstance;
    upgradeService = TestBed.get(UpgradeService);
    userDataService = TestBed.get(UserDataService);
  });


  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('upgrade-container should be empty on init of new user', async () => {
    await changeParameter(0, 0, []);
    expect(nativeElementUpgrades.children.length).toBe(0);
  });
  it('upgrade-container should be empty if user has not yet fulfilled criteria for upgrade', async () => {
    await changeParameter(0, 19, []);
    expect(nativeElementUpgrades.children.length).toBe(0);
  });
  it('upgrade-container should show upgrade on reaching of criteria and not yet having it in UserData', async () => {
    await changeParameter(0, 20, []);
    expect(nativeElementUpgrades.children.length).toBe(1);
  });
  // TODO: test animation // last one doesn't work yet!!!!
  it('New upgrade animation appears, when reaching criteria ', async () => {
    await changeParameter(0, 20, []);
  });

  it('Upgrade Popup should open on click on Upgrade-Icon', async () => {
    await changeParameter(0, 20, []);
    const openPopupBtn = fixture.debugElement.query(By.css('.upgrade-icon'));
    await openPopupBtn.triggerEventHandler('click', null);
    await fixture.detectChanges();
    const activateUpgradeBtn = fixture.debugElement.query(By.css('button.btn.upgrade-btn'));
    expect(activateUpgradeBtn).toBeTruthy();
  });
  it('Upgrade should be added to UserData on click on Activate Button', async () => {
    await changeParameter(0, 20, []);
    const openPopupBtn = fixture.debugElement.query(By.css('.upgrade-icon'));
    await openPopupBtn.triggerEventHandler('click', null);
    await fixture.detectChanges();
    const activateUpgradeBtn = fixture.debugElement.query(By.css('button.btn.upgrade-btn'));
    await activateUpgradeBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.UserDataService.userData[0].data.upgrades.length).toBe(1);
  });
  // last one doesn't work yet!!!!
  it('Upgrade Popup should hide on click on Activate Button', async () => {
    await changeParameter(0, 20, []);
    const openPopupBtn = fixture.debugElement.query(By.css('.upgrade-icon'));
    await openPopupBtn.triggerEventHandler('click', null);
    await fixture.detectChanges();
    let activateUpgradeBtn = fixture.debugElement.query(By.css('button.btn.upgrade-btn'));
    await activateUpgradeBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    await changeParameter(0, 20, component.UserDataService.userData[0].data.upgrades);
    activateUpgradeBtn = fixture.debugElement.query(By.css('button.btn.upgrade-btn'));
    expect(activateUpgradeBtn).toBe(null);
  });
  it('upgrade-container should not show Upgrade anymore after adding it to UserData', async () => {
    await changeParameter(0, 20, [0]);
    expect(nativeElementUpgrades.children.length).toBe(0);
  });
  // popup closes on close button // last one doesn't work yet!!!!
  it('pop closes when close button is clicked', async () => {
    await changeParameter(0, 20, []);
    const openPopupBtn = fixture.debugElement.query(By.css('.upgrade-icon'));
    await openPopupBtn.triggerEventHandler('click', null);
    await fixture.detectChanges();
    const closePopupBtn = fixture.debugElement.query(By.css('.x-close'));
    await closePopupBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    const activateUpgradeBtn = fixture.debugElement.query(By.css('button.btn.upgrade-btn'));
    expect(activateUpgradeBtn).toBe(null);
  });
  // test if upgrade text in popup
  it('upgrade title in popup is correct', async () => {
    await changeParameter(0, 20, []);
    const openPopupBtn = fixture.debugElement.query(By.css('.upgrade-icon'));
    await openPopupBtn.triggerEventHandler('click', null);
    await fixture.detectChanges();
    const upgradeTitle = fixture.debugElement.query(By.css('.upgrade-title'));
    expect(upgradeTitle.nativeElement.textContent).toBe('Test Title');
  });
  // test if img is correct
  it('upgrade image is correct', async () => {
    await changeParameter(0, 20, []);
    const openPopupBtn = fixture.debugElement.query(By.css('.upgrade-icon'));
    expect(openPopupBtn.nativeElement.src).toContain('shake.svg');
  });
});



