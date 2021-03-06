import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';

@Component({
    selector: 'app-rpn',
    templateUrl: './rpn.component.html',
    styleUrls: ['./rpn.component.scss']
})

export class RPNComponent implements OnInit {

  given: string = ""
  input: string = ""
  isExpression: boolean = true
  previous: string = ""
  output: string = ""
  
  constructor() { }

  onSwitch() {
    this.given = ""
    this.isExpression = !this.isExpression
  }

  _keyPress(event: any) {
    const pattern = /[0-9()+\-/*\^\ ]/g
    let inputChar = String.fromCharCode(event.charCode);
    var key = event.keyCode || event.charCode
    console.log('key', key)
    //c = 99 , v = 118, x = 120, a = 97, back = 8, move = 37-40
    if (pattern.test(inputChar) || key === 46 || key === 37 || key === 39 || key === 8
      || (event.ctrlKey && ( key === 99 || key === 118 || key === 120 || key === 97))) {
      //
    } else {
      event.preventDefault();
      return
    }

    
    if (this.isExpression) {
      this.calculateFromRPN()
    } else {
      this.calculateTo()
    }
  }

  _keyUp(event:any) {
    const operationsplus = /[()+\-/*\^]/g
    this.input = this.given.replace(operationsplus, ' ' + '$&' + ' ');
    console.log('newthing', this.input)
  }

  calculateFromRPN() {
    console.log('hehe');
  }

  calculateTo() {
    
  }

  calculateToRPN() {
    var elements = this.given.split(" ").join("").split("")
    console.log(elements)
    var prev:string=null
    var parse:string = ""
    for (let i in elements) {
      if (prev === null) {
        if (elements[elements[i]] === "+" || elements[i] === "/" || elements[i] === "-" || elements[i] === "("
          || elements[i] === ")" || elements[i] === "*" || elements[i] === "^" ) {
            prev = "op"
        } else {
          prev = "non-op"
        }
        parse += elements[i]
      } else {
        if (elements[i] === "+" || elements[i] === "/" || elements[i] === "-" || elements[i] === "("
          || elements[i] === ")" || elements[i] === "*" || elements[i] === "^") {
            parse += " " + elements[i]
            prev = "op"
        } else {
          if (prev === "op") {
            parse += " " + elements[i]
          } else {
            parse += elements[i]
          }
          prev = "non-op"
        }
      }
    }
    elements = parse.split(" ")
    console.log('parse',elements)

    var stack: string[] = []
    var output: string = ""
    //shunting yard algorithm
    for (let i in elements) {
      if (elements[i] !== "+" && elements[i] !== "-" && elements[i] !== '('
        && elements[i] !== "/" && elements[i] !== "*" && elements[i] !== ')'
        && elements[i] !== "^") {
        output = output + elements[i] + " "
      } else if (stack.length === 0 || elements[i] === '(') {
        stack.push(elements[i])
      } else if (elements[i] === ')') {
        var last = stack.pop()
        // while (last !== '(') {
        //   output = output + last + " "
        //   last = stack.pop()
        // }
      } else {
        var last = stack.pop()
        if (last === '^') {
          if (elements[i] !== '^') {
            output = output + last + " "
            stack.push(elements[i])
          } else {
            stack.push(elements[i])
            stack.push(elements[i])
          }
        } else if (last === '*' || last === '/') {
          if (elements[i] !== "^") output = output + stack.pop() + " "
          stack.push(elements[i])
        } else if (last === "+" || last === "-") {
          if (elements[i] === "+" || elements[i] === "-") {
            output = output + stack.pop() + " "
          }
          stack.push(elements[i])
        }
      }
    }
    while (stack.length !== 0) {
      output = output + stack.pop() + " "
    }
    console.log('output ', output, 'stack', stack)
    this.given = output

  }

  ngOnInit() {}

}
