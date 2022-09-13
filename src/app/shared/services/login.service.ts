import { Injectable, Output, EventEmitter } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from './baseUrl';
import { UserPayload } from '../interfaces/user-payload';

@Injectable({
providedIn: 'root'
})

export class LoginService {
    
    redirectUrl!: string;

    @Output() getLoggedInState: EventEmitter<any> = new EventEmitter();

    constructor( private httpClient : HttpClient ) { }

    public userLogin(email: string, password: string) {
        return this.httpClient.post<any>(BaseURL + "/Users/login", { email, password })
        .pipe(
            tap( (res: UserPayload) => {  
                this.setUserObj(res);
                this.setToken(res.username!);
                this.getLoggedInState.emit(true);
            })
        );
    }

    public userRegister(username: string, email: string, password: string) {
        return this.httpClient.post<any>(BaseURL + "/Users/register", { username, email, password });
    }

    // Setting user token as it's username
    setToken(token: string) { localStorage.setItem('token', token); }

    getToken() { return localStorage.getItem('token'); }

    deleteToken() { localStorage.removeItem('token'); }

    // Setting user object to fetch id, username and use it in api calls
    setUserObj(user: UserPayload) { localStorage.setItem('user', JSON.stringify(user) ); }

    getUserObj() { return JSON.parse(localStorage.getItem('user') || '')   }

    deleteUserObj() { localStorage.removeItem('user'); }

    // Returning log in status
    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) { return true }
        else { return false; }
    }
}