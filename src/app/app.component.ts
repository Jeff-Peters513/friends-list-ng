import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends-list-ng';
  name: string = "";
  age: number = 0;
  email: string ="";
  bff: boolean = false;
  
  constructor(name:string, age:number, email:string, bff:boolean) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.bff = bff;
  }

}

let f1: AppComponent = new AppComponent("Jason Herbot", 45, "jason.Herbot@yahoo.com", true);
let f2: AppComponent = new AppComponent("George Hiben", 57, "George.Hiben@yahoo.com", false);
let f3: AppComponent = new AppComponent("Mollie Dwyer", 44, "Mollie.Dwyer@yahoo.com", true);
let f4: AppComponent = new AppComponent("Patrick Dwyer", 49, "null", false);
let f5: AppComponent = new AppComponent("Jared Johnson", 46, "Jdude@gmail.com", false);

let friends: Array<AppComponent> = [f1, f2, f3, f4, f5];


add() {
  
  // friends.push(friend);
  

}