import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nums = Array(10)
    .fill(0)
    .map((num, i) => String(num + i))
    .reverse();
  operators = ['+', '-', '*', '/'];
  operatorFlag = false;
  expr: string = '0';
  pushNum(num: string) {
    if (this.expr == '0') {
      this.expr = num;
    } else {
      this.expr += num;
      if (this.operatorFlag === true) {
        this.operatorFlag = !this.operatorFlag;
      }
    }
  }
  operatorPressed(operator: string) {
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
