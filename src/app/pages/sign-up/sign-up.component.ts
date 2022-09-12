import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  showLoading: boolean = false;
  showError: string | undefined;

  constructor(private fb: FormBuilder, private dataService: LoginService, private router: Router) {
      this.registerForm = this.fb.group({
        name: ['', Validators.compose([Validators.required, Validators.pattern("^(?=.{4,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")])],
        email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        confirmPassword: ['', [Validators.required]], 
      }, {
        validators: this.passMatch('password', 'confirmPassword')
      });
  }

  ngOnInit() {}

  postData(regForm: any){
      this.showLoading = true;
      this.dataService.userRegister(regForm.value.name, regForm.value.email, regForm.value.password)
      .pipe(first())
      .subscribe(
          (data) => { 
            this.router.navigate(['login']); 
            this.showLoading = false;
          },
          (error) => { 
            this.showError = error;
            this.showLoading = false; 
          }
      );

  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get fc() { return this.registerForm.controls }

  passMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {

      const passControl = formGroup.controls[password]
      const confPassControl = formGroup.controls[confirmPassword]

      if (confPassControl.errors && !confPassControl.errors['passMatch']){
        return;
      }

      if (passControl.value !== confPassControl.value) {
        confPassControl.setErrors({ passMatch: true})
      } else { confPassControl.setErrors(null) }
    }
  }

}