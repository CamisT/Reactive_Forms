import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private dialog: MatDialog) {}


  personalForm: FormGroup = new FormGroup({
    name:  new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastname:  new FormControl(''),
    username: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    adress: new FormControl('', Validators.required),
    complement: new FormControl(''),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]) 
  })


  submit(): void {

    console.log(`Nome = ${this.personalForm.controls['name'].value}`)
    console.log(`Sobrenome = ${this.personalForm.controls['lastname'].value}`)
    console.log(`Username = ${this.personalForm.controls['username'].value}`)
    console.log(`CPF = ${this.personalForm.controls['cpf'].value}`)
    console.log(`Telefone = ${this.personalForm.controls['phone'].value}`)
    console.log(`Endereço = ${this.personalForm.controls['adress'].value}`)
    console.log(`Complemento = ${this.personalForm.controls['complement'].value}`)
    console.log(this.personalForm.controls['password'].value)
    console.log(this.personalForm.controls['password2'].value)

    let ref = this.dialog.open(DialogComponent)

    ref.componentInstance.nome = this.personalForm.controls['name'].value
    ref.componentInstance.sobrenome = this.personalForm.controls['lastname'].value
    ref.componentInstance.cpf= this.personalForm.controls['cpf'].value
    ref.componentInstance.telefone = this.personalForm.controls['phone'].value
    
  }


  validarSenha(v1: any, v2: any): boolean {
    return !(v1 === v2)
  }
}
