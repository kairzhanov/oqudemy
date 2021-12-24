import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/oqudemy/src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentItem')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        // return this.http.post<any>(`${environment.apiUrl}/users/login`, { username, password })
        //     .pipe(map(user => {
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }));

        if (username === 'hello@gmail.com' && password === '123') {
            let user = new User();
            user.firstName = 'Damir';
            user.lastName = 'Kairzhanov';
            user.token = 'dummytoken';
            user.role = 'User';
            user.username = 'hello@gmail.com';
            user.id = 1; 
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          } else {
            return null;
          }
    }

    register(username: string, password: string, name: string, lastname: string = '') {
      // return this.http.post<any>(`${environment.apiUrl}/users/login`, { username, password })
      //     .pipe(map(user => {
      //         localStorage.setItem('currentUser', JSON.stringify(user));
      //         this.currentUserSubject.next(user);
      //         return user;
      //     }));
      let user = new User();
      user.firstName = name;
      user.lastName = lastname;
      user.token = 'dummytoken';
      user.role = 'user';
      user.username = username;
      user.id = 1; 
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
