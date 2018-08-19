import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {



  add(no1,no2){
      
    return no1 + no2;
       
  }
  constructor() { }
}
