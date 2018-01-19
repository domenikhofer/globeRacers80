import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {UpgradeService} from '../services/upgrade.service';
import {UserDataService} from '../services/user-data.service';
import {trigger, style, animate, transition} from '@angular/animations';
import * as anime from 'animejs';

@Component({
  selector: 'app-upgrade',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('0.5s ease-in')
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('0.2s ease-out')
        ])
      ]
    )
  ],
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})

export class UpgradeComponent implements OnInit, OnChanges {
  @Input() distance;
  @Input() clickCount;
  @Input() userData;
  @Output() upgradeClicked: EventEmitter<any> = new EventEmitter();
  allUpgrades;
  UserDataService;
  UpgradeService;
  availableUpgrades;
  showBox = false;
  clickedId;
  presentOpenness = 0;
  currentUpdates = 0;

  constructor(UpgradeService: UpgradeService, UserDataService: UserDataService) {
    this.UpgradeService = UpgradeService;
    this.UserDataService = UserDataService;
  }

  async ngOnInit() {
    this.allUpgrades = await this.UpgradeService.getAllUpgrades();
  }

  ngOnChanges(changes) {
    if (changes.userData && changes.userData.firstChange === false) {
      this.displayUpgrades();
    }
  }

  async onUpgradeClick(id) {
    await this.UserDataService.addUpgrade(this.userData._id, id);
    this.showBox = false;
    this.displayUpgrades();
    this.upgradeClicked.emit(this.allUpgrades.find(x => x.id === id));
  }

  async displayUpgrades() {
    const userUpgrades = this.userData.data.upgrades;
    if (this.allUpgrades) {
      this.availableUpgrades = this.allUpgrades.filter(
        x =>
        ((x.unlocks.unit === 'c' && x.unlocks.count <= this.clickCount) ||
        (x.unlocks.unit === 'd' && x.unlocks.count <= this.distance && this.distance <= x.unlocks.max)) &&
        userUpgrades.indexOf(x.id) === -1
      );
      if (this.availableUpgrades.length > this.currentUpdates) {
        this.showUpgradeGift();
      }
      this.currentUpdates = this.availableUpgrades.length;
    }
  }

  showinfo(id) {
    this.showBox = true;
    this.clickedId = id;
  }

  hideInfo(id) {
    this.showBox = false;
    this.clickedId = id;
  }

  showUpgradeGift() {
    const showCover = anime({
      targets: '.cover, .upgradesPopup',
      scale: [
        {value: 0, duration: 1},
        {value: 1, duration: 1}
      ],
      opacity: [
        {value: 0, duration: 1},
        {value: 1, duration: 1000},
        {value: 1, duration: 2000}
      ]
    });

    showCover.restart();

    const showPresent = anime({
      targets: 'svg',
      scale: [
        {value: 0, duration: 0},
        {value: 1, duration: 1000},
        {value: 1, duration: 1000},
        {value: 1.1, duration: 1000},
        {value: 1.1, duration: 1500},
        {value: 1.2, duration: 1000}
      ],
      rotate: [
        {value: '-=90deg', duration: 0},
        {value: '+=90deg', duration: 1000},
        {value: '+=3deg', duration: 300},
        {value: '-=3deg', duration: 300},
        {value: 0, duration: 1000},
        {value: '+=3deg', duration: 300},
        {value: '-=3deg', duration: 300},
        {value: 0, duration: 1000},
        {value: '+=3deg', duration: 300},
        {value: '-=3deg', duration: 300},
        {value: 0, duration: 1000},
      ]
    });

    showPresent.restart();
  }

  openUpgradePresent() {
    if (++this.presentOpenness < 10) {
      anime({
        targets: '.Top',
        translateY: [
          {value: '-=5', duration: 1}
        ]
      });
      anime({
        targets: 'svg',
        scale: [
          {value: '+=0.1', duration: 100},
          {value: '-=0.1', duration: 100}
        ]
      });
    } else {
      this.presentOpenness = 0;
      anime({
        targets: '.Top',
        translateY: [
          {value: '-=2000', duration: 1000},
          {value: '-=0', duration: 2000},
          {value: 0, duration: 1}
        ],
        easing: 'easeInOutQuart'
      });
      anime({
        targets: '.Bottom',
        translateY: [
          {value: '+=1000', duration: 1000},
          {value: '+=1000', duration: 2000},
          {value: 0, duration: 1}
        ]
      });
      anime({
        targets: '.popupText',
        scale: [
          {value: 0, duration: 0},
          {value: 1, duration: 1000},
          {value: 0, duration: 2000},
        ]
      });
      anime({
        targets: 'svg',
        scale: [
          {value: 1, duration: 4000},
          {value: 0, duration: 1}
        ]
      });
      anime({
        targets: '.cover, .upgradesPopup',
        scale: [
          {value: 1, duration: 2500},
          {value: 0, duration: 1}
        ],
        opacity: [
          {value: 1, duration: 2000},
          {value: 0, duration: 1000}
        ]
      });
    }
  }
}
