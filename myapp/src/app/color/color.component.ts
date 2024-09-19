import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked{
  @Input()
  title: string="Hello";
  
  constructor(){
    console.log("constructor() is called.......From Child");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() is called....... From Child");
}
  ngAfterContentInit():void{
    console.log("ngAfterContentInit() is called.........From Child");
  }
  ngDoCheck():void{
    console.log("ngDoCheck() is called.........From Child");
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChanges() is called........From Child");
  }
  ngOnInit(): void{
    console.log("ngOnInit() is called........From Child");
  }
  keyCapture(event: string){
    this.title=event
  }
  sendMessage(): void{
    console.log("Click event fired........From Child")
  }
}
