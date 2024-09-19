import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projForms';
  data=""
  buttonClick(data2:string){
    this.data=""
    this.data=data2
  }
}
