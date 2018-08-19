import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  no1 : number = 0;
  no2 : number = 0;
  sumof : number = 0;

  add(){
    // alert(this.no1*1+this.no2*1);
  
    this.sumof = this.no1*1 + this.no2*1; // with <input type="text"
    //this.sumof = this.no1 + this.no2;// with <input type="number"
  }

  sub(){
    this.sumof = this.no1 - this.no2;
  }
    mul(){
    this.sumof = this.no1 * this.no2;
  }

  div(){
    this.sumof = this.no1 / this.no2;
  }
  constructor() { }

  ngOnInit() {
  }

}
