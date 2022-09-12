import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class LoginService {
    
    redirectUrl!: string;
    baseUrl: string = "http://127.0.0.1:3000/api";

    @Output() getLoggedInState: EventEmitter<any> = new EventEmitter();

    constructor( private httpClient : HttpClient ) { }

    public userLogin(email: string, password: string) {
        return this.httpClient.post<any>(this.baseUrl + '/login', { email, password })
        .pipe(
            map( (user) => {
                console.log(user)
                this.setToken(email);
                this.getLoggedInState.emit(true);
            })
        );
    }

    public userRegister(username: string, email: string, password: string) {
        return this.httpClient.post<any>(this.baseUrl + '/register', { username, email, password })
        .pipe(map( (users) => { console.log (users); }));
    }

    // Setting user token as it's email
    setToken(token: string) { localStorage.setItem('token', token); }

    getToken() { return localStorage.getItem('token'); }

    deleteToken() { localStorage.removeItem('token'); }

    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) { return true }
        else { return false; }
    }
}