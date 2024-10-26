import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'incubyte';
  value = ''
  firstOperand = 0;
  secondOperand = 0;
  operator = '';
  result = 0;

  numbers = [1,2,3,4,5,6,7,8,9];
  actions = ['+','-','*']
  otherOperations = ['clear','0','clear all'];
  str = '';
  number:FormControl = new FormControl('0');

  appendNumber = (number:number) => {
     this.str += number.toString();
     this.number.setValue(this.str);
     if(this.number !==null) {
     this.firstOperand = +this.str.split('+')[0];
     this.secondOperand = +this.str.split('+')[1];
    this.result = this.operate(this.operator,this.firstOperand,this.secondOperand);
    console.log(this.result);
     }
  }

  operatorClicked(operator:string) {
    console.log(operator)
    this.operator = operator;
    this.str +=operator;
    this.number.setValue(this.str);
    console.log(this.number);
  }

operate = (operator:any, a:any, b:any) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return b;
  }
}
}
