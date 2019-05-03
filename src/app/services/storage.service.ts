import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cup } from "../models/cup";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  cups: Array<Cup> = [];
  /**
   * addCup
   * Creates an entry for a new cup in local storage.
   * Updates the collection of cups if they exist.
   * @param cup 
   */
  public addCup(cup: Cup) {
    this.cups.push(cup);
    let cups = [];
    if (localStorage.getItem('cups') === null) {
      cups.push(cup);
      localStorage.setItem('cups', JSON.stringify(cups));
    } else {
      cups = JSON.parse(localStorage.getItem('cups'));
      cups.push(cup);
      localStorage.setItem('cups', JSON.stringify(cups));
    }
  }

  /**
   * getCups
   * Fetches any cups in browser local storage.
   */
  public getCups(): Observable<Cup[]> {
    if (localStorage.getItem('cups') === null) {
      this.cups = [];
    } else {
      this.cups = JSON.parse(localStorage.getItem('cups'));
    }
    return of(this.cups);
  }

  /**
   * updateCup
   * Takes an index and replaces the contents there.
   * @param index
   * @param data
   */
  public updateCup(index :number, data: Cup) {
    let cups = JSON.parse(localStorage.cups);

    cups.splice(index,1,data);
    
    localStorage.setItem('cups', JSON.stringify(cups));  //put the object back
  }

  /**
   * deleteCup
   * Removes a cup from local storage.
   * @param cup 
   */
  public deleteCup(cup: Cup) {
    for (let i = 0; i < this.cups.length; i++) {
      if (cup == this.cups[i]) {
        this.cups.splice(i, 1);
        localStorage.setItem('cups', JSON.stringify(this.cups));
      }
    }
  }

}
