import { Component } from '@angular/core';
import{CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


  //path = './assets/img/bulbon.gif';
 
  // status = "OFF";


  public pickColor = "blue";


  // change(){
   
  //      if(this.status == 'ON')
  //      {
  //        this.path = './assets/img/bulbon.gif'
  //        this.status = "OFF";

  //      } else 
  //      {
  //        this.path = './assets/img/bulboff.gif';
  //        this.status = "ON";

  //      }

    
  // }



 
  
  // no1 : number = 0;
  // no2 : number = 0;
  // sumof : number = 0;

  // add(){
  //   // alert(this.no1*1+this.no2*1);
  
  //   this.sumof = this.no1*1 + this.no2*1; // with <input type="text"
  //   //this.sumof = this.no1 + this.no2;// with <input type="number"
  // }

  // sub(){
  //   this.sumof = this.no1 - this.no2;
  // 

  // mul(){
  //   this.sumof = this.no1 * this.no2;
  // }

  // div(){
  //   this.sumof = this.no1 / this.no2;
  // }

  displayName(){
    return  true;
  }  
  

  // path = './assets/img/bulbon.gif';
 
  // status = "OFF";


//   colors =  [
//     {status:'ON ',path : './assets/img/bulboff.gif'},
//     {status:'ON ',path : './assets/img/bulboff.gif'},
//     {status:'ON ',path : './assets/img/bulboff.gif'},
//     {status:'ON ',path : './assets/img/bulboff.gif'},
//     {status:'ON ',path : './assets/img/bulboff.gif'}

//   ];
 
//   change(color){
   
//     if(color.status == 'ON '){
//       color.path = './assets/img/bulbon.gif'
//       color.status = "OFF";
   
//     } else x
//       color.path = './assets/img/bulboff.gif';
//       color.status = "ON ";
     
//     }
//     return color;
// }
result = 0;
constructor(private x : CalculatorService){
this.result = this.x.add(3,4);
}

 
  
  

  

 
 

  
  
  
}
