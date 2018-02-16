import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';

@Component({
    selector: 'app-morse',
    templateUrl: './morse.component.html',
    styleUrls: ['./morse.component.scss']
})

export class MorseComponent implements OnInit {

  given: string = ""
  previousStr: string = ""
  fromMorse: boolean = true
  previous: string = ""
  output: string = "" 

  constructor() { }

  onSwitch() {
    this.given = ""
    this.fromMorse = !this.fromMorse
    this.output = ""
    this.previousStr = ""
  }

  from() {
    this.output = ""
    if (!(/^[\.\ \-]*$/).test(this.given)) {
      this.given = this.previousStr
      return
    }
    var array = this.given.toUpperCase().split(" ")
    for (let i in array) {
      if (array[i] === ".-") {
        this.output += "A"
      } else if (array[i] === "-...") {
        this.output += "B"
      }  else if (array[i] === "-.-.") {
        this.output += "C"
      } else if (array[i] === "-..") {
        this.output += "D"
      } else if (array[i] === ".") {
        this.output += "E"
      } else if (array[i] === "..-.") {
        this.output += "F"
      } else if (array[i] === "--.") {
        this.output += "G"
      } else if (array[i] === "....") {
        this.output += "H"
      } else if (array[i] === "..") {
        this.output += "I"
      } else if (array[i] === ".---") {
        this.output += "J"
      } else if (array[i] === "-.-") {
        this.output += "K"
      } else if (array[i] === ".-..") {
        this.output += "L"
      } else if (array[i] === "--") {
        this.output += "M"
      } else if (array[i] === "-.") {
        this.output += "N"
      } else if (array[i] === "---") {
        this.output += "O"
      } else if (array[i] === ".--.") {
        this.output += "P"
      } else if (array[i] === "--.-") {
        this.output += "Q"
      } else if (array[i] === ".-.") {
        this.output += "R"
      } else if (array[i] === "...") {
        this.output += "S"
      } else if (array[i] === "-") {
        this.output += "T"
      } else if (array[i] === "..-") {
        this.output += "U"
      } else if (array[i] === "...-") {
        this.output += "V"
      } else if (array[i] === ".--") {
        this.output += "W"
      } else if (array[i] === "-..-") {
        this.output += "X"
      } else if (array[i] === "-.--") {
        this.output += "Y"
      } else if (array[i] === "--..") {
        this.output += "Z"
      } else if (array[i] === "-----") {
        this.output += "0"
      } else if (array[i] === ".----") {
        this.output += "1"
      } else if (array[i] === "..---") {
        this.output += "2"
      } else if (array[i] === "...--") {
        this.output += "3"
      } else if (array[i] === "....-") {
        this.output += "4"
      } else if (array[i] === ".....") {
        this.output += "5"
      } else if (array[i] === "-....") {
        this.output += "6"
      } else if (array[i] === "--...") {
        this.output += "7"
      } else if (array[i] === "---..") {
        this.output += "8"
      } else if (array[i] === "----.") {
        this.output += "9"
      }
    }
    this.previousStr = this.given
  }

  to() {
    this.output = ""
    if (!(/^[\w\ ]*$/).test(this.given)) {
      this.given = this.previousStr
      return
    }
    var array = (this.given).toUpperCase().split(" ").join().split("")
    for (let i in array) {
      if (array[i] === "A") {
        this.output += ".-"
      } else if (array[i] === "B") {
        this.output += "-..."
      }  else if (array[i] === "C") {
        this.output += "-.-."
      } else if (array[i] === "D") {
        this.output += "-.."
      } else if (array[i] === "E") {
        this.output += "."
      } else if (array[i] === "F") {
        this.output += "..-."
      } else if (array[i] === "G") {
        this.output += "--."
      } else if (array[i] === "H") {
        this.output += "...."
      } else if (array[i] === "I") {
        this.output += ".."
      } else if (array[i] === "J") {
        this.output += ".---"
      } else if (array[i] === "K") {
        this.output += "-.-"
      } else if (array[i] === "L") {
        this.output += ".-.."
      } else if (array[i] === "M") {
        this.output += "--"
      } else if (array[i] === "N") {
        this.output += "-."
      } else if (array[i] === "O") {
        this.output += "---"
      } else if (array[i] === "P") {
        this.output += ".--."
      } else if (array[i] === "Q") {
        this.output += "--.-"
      } else if (array[i] === "R") {
        this.output += ".-."
      } else if (array[i] === "S") {
        this.output += "..."
      } else if (array[i] === "T") {
        this.output += "-"
      } else if (array[i] === "U") {
        this.output += "..-"
      } else if (array[i] === "V") {
        this.output += "...-"
      } else if (array[i] === "W") {
        this.output += ".--"
      } else if (array[i] === "X") {
        this.output += "-..-"
      } else if (array[i] === "Y") {
        this.output += "-.--"
      } else if (array[i] === "Z") {
        this.output += "--.."
      } else if (array[i] === "0") {
        this.output += "-----"
      } else if (array[i] === "1") {
        this.output += ".----"
      } else if (array[i] === "2") {
        this.output += "..---"
      } else if (array[i] === "3") {
        this.output += "...--"
      } else if (array[i] === "4") {
        this.output += "....-"
      } else if (array[i] === "5") {
        this.output += "....."
      } else if (array[i] === "6") {
        this.output += "-...."
      } else if (array[i] === "7") {
        this.output += "--..."
      } else if (array[i] === "8") {
        this.output += "---.."
      } else if (array[i] === "9") {
        this.output += "----."
      }
      this.output += " "
    }
    this.previousStr = this.given
  }

  ngOnInit() {}

}
