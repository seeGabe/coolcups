import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Cup } from '../models/cup';
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {

  @Input() cup: Cup; 
  
  @Input() index: number;
  
  @Output() updateCount = new EventEmitter<string>();

  imagePath: string;
  isfull: string;
  constructor(private _storeSvc: StorageService) {}

  ngOnInit() {
    this.setImagePath();
  }

  updateMe(c:Cup) {
    this._storeSvc.updateCup(this.index, c);
  }

  drinkMe(){
    if (window.confirm('drink it down?')) {
      this.cup.full = false;
      this.setImagePath();
      this.updateMe(this.cup);
    }
  }

  setImagePath() {
    this.isfull = this.cup.full ? 'full' : 'empty';
    this.imagePath = '../../assets/img/Cup-'+this.cup.type+'-'+this.isfull+'.png';
  }
  
  deleteCup() {
    if (window.confirm('delete this cup?')) {
      this._storeSvc.deleteCup(this.cup);
    }
    this.updateCount.next('countMyCups')
  }

  fillCup() {
    if (window.confirm('fill this cup?')) {
      this.cup.full = true;
      this._storeSvc.updateCup(this.index, this.cup);
      this.setImagePath();
    }
  }
}
