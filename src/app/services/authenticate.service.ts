import { Injectable } from '@angular/core';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  /**
   * login
   * Takes the user provided info.
   * Adds a token to local storage.
   * @param userInfo 
   */
  public login(userInfo:User) {
    localStorage.setItem('ACCESS_TOKEN', userInfo.username + '/' + userInfo.password);
  }

  /**
   * logout
   * Removes token from local storage.
   */
  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  /**
   * isLoggedOn
   * Checks local storage for our token.
   */
  public isLoggedOn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

}
