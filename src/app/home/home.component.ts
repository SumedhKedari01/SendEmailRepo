import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private snak : MatSnackBar)
  {

  }

  btnClick()
  {
    console.log("btn");
    this.snak.open("welcome to this app","cancle");
  }
}
