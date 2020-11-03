import { Component } from '@angular/core';
import { U4Service} from '../u4.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public quote: U4Service) {
    this.newQuote();
  }

  newQuote(){
    this.quote.getQuote().subscribe( data => {
      console.log(data);
    })
  }

}
