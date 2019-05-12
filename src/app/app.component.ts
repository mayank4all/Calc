import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

operation = ['', '', ''];
  display = '';
  subDisplay = ''
  activeBuildingNumber = '';

  buildNumber(num:string): void{
    this.activeBuildingNumber += num;
    if(this.operation[1].length) {
      this.operation[2] = this.activeBuildingNumber;
    }
    else {
      this.operation[0] = this.activeBuildingNumber;
      this.subDisplay = '';
    }

    this.renderDisplay();
  }

  renderDisplay(): void {
    this.display = this.operation.join(' ');
  }

  selectOperator(operator:string): void {
    if(!this.operation[0].length){
      this.displayError();
      this.subDisplay = 'Enter number before operation';
      return;
    }
    this.operation[1] = operator;
    this.activeBuildingNumber = '';
    this.renderDisplay();
  }

  showResult(): void {
    if( this.confirmInputs() ) {
      let val = this.calculateResult();

      this.display = ''+val;
      this.subDisplay = this.operation.join(' ');

      this.resetOperation()
    }
  }

  resetOperation():void {
    this.operation = ['', '', ''];
    this.activeBuildingNumber = '';
  }

  displayError():void {
    this.display = 'Error!'
  }

  confirmInputs():boolean {
    if(!this.operation[0].length){
      this.displayError()
      this.subDisplay = 'Enter First Number';
      return false;
    } else if(!this.operation[1].length){
      this.displayError()
      this.subDisplay = 'Enter Operator';
      return false;
    } else if(!this.operation[1].length){
      this.displayError()
      this.subDisplay = 'Enter Second Number';
      return false;
    }
    return true;
  }

  calculateResult():number {
    switch(this.operation[1]) {
      case '*':
        return parseFloat(this.operation[0]) * parseFloat(this.operation[2]);
      case "+":
        return parseFloat(this.operation[0]) + parseFloat(this.operation[2]);
      case "-":
        return parseFloat(this.operation[0]) - parseFloat(this.operation[2]);
    }
  }


}

