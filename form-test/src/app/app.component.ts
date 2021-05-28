import { CustomvalidationService } from './customvalidation.service';
import { LoginInterface } from './models/login';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  model: Partial<LoginInterface> = {};

  registerForm!: FormGroup;
  submitted = false;



  constructor(
    private fb: FormBuilder,
    private customValidation: CustomvalidationService,
    ){}

  ngOnInit(){

    this.registerForm = this.fb.group({
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    },
      {
        validator: this.customValidation.MatchPassword('password', 'confirmPassword'),
      }
    );
  }



  get registerFormControl() {
    return this.registerForm.controls;
  }

  login(): void {
    console.log(this.model);
  }

  register(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!');
      console.table(this.registerForm.value);
    }
  }




}


