import { Component } from '@angular/core';
import { U4Service} from '../u4.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  icon_url: string;
  quote: string;

  constructor( public quotePark: U4Service) {
    this.newQuote();
  }

  newQuote(){
    this.quotePark.getQuote().subscribe( data => {
      console.log(data);
      this.icon_url = data.icon_url;
      this.quote = data.value;
    })
  }

}
