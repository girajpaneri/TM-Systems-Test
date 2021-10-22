import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  
   }

  ngOnInit(): void {
  }

  
  get f() { return this.loginForm.controls; }


  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.router.navigate(['/user/home']);      
      localStorage.setItem('userName', this.loginForm.value.email);
      localStorage.setItem('STATE', 'true');
      localStorage.setItem('Token', btoa(this.loginForm.value.email + 'pass@word'));
    }

  }

}
