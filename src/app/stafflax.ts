import {Component} from 'angular2/core';


@Component({
  selector: 'stafflax-app',
  providers: [],
  templateUrl: 'app/stafflax.html',
  directives: [],
  pipes: []
})
export class StafflaxApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
