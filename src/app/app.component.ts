import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nums = Array(10)
    .fill(0)
    .map((num, i) => num + i)
    .reverse();
  operators = ['+', '-', '*', '/'];
  operatorFlag = false;
  expr = '0';
  pushNum(num) {
    if (this.expr == '0') {
      this.expr = String(num);
    } else {
      this.expr += num;
      if (this.operatorFlag === true) {
        this.operatorFlag = !this.operatorFlag;
      }
    }
  }
  operatorPressed(operator) {
    this.expr += operator;
    this.operatorFlag = !this.operatorFlag;
  }
  equalPressed() {
    if (this.operatorFlag === false) {
      this.expr = eval(this.expr);
    }
  }
  reset() {
    this.expr = '0';
    this.operatorFlag = false;
  }
}
