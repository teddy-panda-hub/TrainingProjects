import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output()
public setItem=new EventEmitter<string>();
  item="";
 
  pushItem(){
    this.setItem.emit(this.item);
    this.item="";
  }
}
