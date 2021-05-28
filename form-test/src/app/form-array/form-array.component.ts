import { FormArray, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  form = this.fb.group({
    users: this.fb.array([])
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get users() {
    return this.form.controls["users"] as FormArray;
  }

  addUser() {
    const usersForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required]
    }) as FormGroup;
    this.users.push(usersForm);
  }

  check() {
    console.log(this.users.value)
  }

  delete(userIndex: number) {
    this.users.removeAt(userIndex);
  }
}
