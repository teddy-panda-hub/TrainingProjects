import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent2child2';
  list:string[]=[];
  addItem(val:string){
    this.list.push(val);
  }
}
