import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent {


  
  colors =  [
    {status:'ON ',path : './assets/img/bulboff.gif'},
    {status:'ON ',path : './assets/img/bulboff.gif'},
    {status:'ON ',path : './assets/img/bulboff.gif'},
    {status:'ON ',path : './assets/img/bulboff.gif'},
    {status:'ON ',path : './assets/img/bulboff.gif'}

  ];
 
  change(color){
   
    if(color.status == 'ON '){
      color.path = './assets/img/bulbon.gif'
      color.status = "OFF";
   
    } else {
      color.path = './assets/img/bulboff.gif';
      color.status = "ON ";
     
    }
    return color;
}

}