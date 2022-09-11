import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private fb: FormBuilder, private dataService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {}

  postData(loginData: any) {
    this.dataService.userLogin( loginData.value.email, loginData.value.password )
    .pipe(first())
    .subscribe(
        (data) => {
            const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/movies';
            this.router.navigate([redirect]);
        },
        (error) => { alert('Error: ' + error) }
    );
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get fc() { return this.loginForm.controls }
}