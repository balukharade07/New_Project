import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{


  title = 'Angular';
  imagePath = './assets/img/ima1.png';
  name = 'Balu Kharade';
  address = 'Dhayri Phata Pune 411041';
  

  
  counter = 0;
  incres(){
    this.counter = this.counter+1;
  }
  deincres(){
    this.counter--;
  }

 
}
