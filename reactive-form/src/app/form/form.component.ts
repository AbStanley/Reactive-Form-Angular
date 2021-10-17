import { passwordValidator } from './validators/password.validator';
import { FormBuilder, Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { firstNameValidator } from './validators/firstName.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      /*
      firstName: ['', 
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(15),
        firstNameValidator.cannotContainSpace
      ],
      lastName: ['', 
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        firstNameValidator.cannotContainSpace
      ],


      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
      ]),*/
      passwords: this.formBuilder.group({
        password: ['', [Validators.required, 
          Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]]
      }, {
        validators: passwordValidator.notSamePassword
      })
      /*
      
      password: ['', 
        Validators.required,
        Validators.minLength(8),
      ],
      confirmPassword: ['', 
        Validators.required,
        passwordValidator.notSamePassword,
      ],*/
    });  
  }

    
  get password(){
    return this.form!.get('passwords.password');
  }

  get confirmPassword() {
    return this.form!.get('passwords.confirmPassword');
  }

  get email() {
    return this.form.get('email');
  }
  
  get lastName() {
    return this.form!.get('lastName');
  }

  get firstName() {
    return this.form!.get('firstName');
  }
   
  showLog(): void {
    console.log(this.form!.value);
  }
  

  
}
