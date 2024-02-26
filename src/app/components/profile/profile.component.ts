import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  favouriteMovie: string ='';

  profileForm: FormGroup = new FormGroup({
    nome: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    cognome: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    dataNascita: new FormControl<Date | string>('')
  })

  handleSubmit(){
    // Leggere formcontrol all'interno di un formgroup
    console.log(this.profileForm.value);
    // Impostare valore di un formcontrol
    // this.profileForm.get("nome")?.setValue("");
    console.log(this.profileForm.value);
  }
}
