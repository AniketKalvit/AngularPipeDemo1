import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pipe Demo';
  
  // pipe demo
  public name="Aniket";
  public msg="Welcome to angular tutorial";
  public employee={
    "firstname":"Aniket",
    "lastname":"Kalvit"
  }

  public date =new Date();
}
