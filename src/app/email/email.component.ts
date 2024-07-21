import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatFormFieldModule,CommonModule,MatInputModule,FormsModule,MatButtonModule,MatFormField,MatIconModule,MatToolbarModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  constructor() {
    

  }

   data={
     to:"",
     subject:"",
      body:""
  }
  
  doSubmit()
  {
    console.log("hello world")
  }

}
