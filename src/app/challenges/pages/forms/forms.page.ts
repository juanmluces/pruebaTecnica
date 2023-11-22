import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrl: './forms.page.scss'
})
export class FormsPage {


  FormContacto: FormGroup

  constructor(private fb:FormBuilder){
    this.FormContacto = this.fb.group({
      name:[ null, Validators.required ],
      surname: [ null, Validators.required],
      email: [ null, Validators.required],
      adress: [ null, Validators.required],
      password: [ null, Validators.required],
      password2: [ null, Validators.required],

    }, {validators:PasswordMatchValidator})
  }




onSubmit():void{
  if(this.FormContacto.valid && this.FormContacto.controls['password'].value === this.FormContacto.controls['password2'].value){
    console.log(this.FormContacto.value)
  }else{console.log("Ha habido un error")}
}

}

function PasswordMatchValidator(control:AbstractControl){
  const formGroup = control as FormGroup
  const password = formGroup.get('password')?.value
  const password2 = formGroup.get('password2')?.value
  if(!password || !password2){
    return null
  }
  if(password === password2){
    return null
  }
  return {
    matchError:true
  }

}
