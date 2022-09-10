import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: LoginService, private router: Router) {
      this.registerForm = this.fb.group({
          email: ['', [ Validators.required, [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]],
          password: ['', Validators.required],
          name: ['', Validators.required]
      });
  }

  ngOnInit() {}

  postData(regForm: any){
      this.dataService.userRegister(regForm.value.name, regForm.value.email, regForm.value.password)
      .pipe(first())
      .subscribe(
          data => { this.router.navigate(['login']); },
          error => {}
      );
  }

  // get email() { return this.registerForm.get('email'); }
  // get password() { return this.registerForm.get('password'); }
  // get name() { return this.registerForm.get('name'); }

}
