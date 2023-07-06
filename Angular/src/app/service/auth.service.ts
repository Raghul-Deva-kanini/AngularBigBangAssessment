import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken 
      () {
      throw new Error('Method not implemented.');
  }


  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn: Observable<boolean>;

  constructor() {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedIn = this.isLoggedInSubject.asObservable();
  }

  login(): void 
  {
    this.isLoggedInSubject.next(true);
  }

  logout(): void 
  {
    this.isLoggedInSubject.next(false);
  }
}