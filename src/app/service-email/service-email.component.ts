import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-service-email',
  templateUrl: './service-email.component.html',
  styleUrls: ['./service-email.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServiceEmailComponent {
  constructor() { }

 
sendMail(data:any)
{
  console.log("hello world")
  
}
}


