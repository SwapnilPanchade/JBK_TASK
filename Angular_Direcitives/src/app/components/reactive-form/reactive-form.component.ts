import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  user = new FormGroup({
    username : new FormControl([Validators.required, Validators.minLength(3)]),
    password: new FormControl([Validators.required, Validators.minLength(8)]),
    email : new FormControl([Validators.required, Validators.email]),
    age : new FormControl([Validators.required, Validators.min(18)])
  })

    registerUser(){
      console.log(this.user.value);

    }
}
