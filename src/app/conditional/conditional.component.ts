import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.scss']
})
export class ConditionalComponent implements OnInit {
  flag1 = false;
  stage = 0;
  intial = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.flag1 = !this.flag1;
}
togg() {
  this.intial = !this.intial;
}
myclick(){
  this.stage++
}
myclick1(){
  this.stage--
}
}
