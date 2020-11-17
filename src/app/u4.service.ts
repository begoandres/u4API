import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote } from './interfaces/quote.interface';

@Injectable({
  providedIn: 'root'
})
export class U4Service {

  //left side (header parameters)
  key: string = "b3a2c7536bmsh67d5a0de92bcb1dp13975bjsn073b964b9b9f";
  //key: string = "63e5524cadmsh850b650d1871e99p1f04a3jsn793a8d949fe4"
  host: string = "quotes15.p.rapidapi.com";
  //host : string = "matchilling-chuck-norris-jokes-v1.p.rapidapi.com";
//url from right side of code (hhtp)
  url: string = "https://quotepark.com/quotes/5507-antoine-de-saint-exupery-here-is-my-secret-it-is-very-simple-it-is-only-w/"
  //url: string = "http://www.api.chucknorris.io/jokes/Jim0jIOySUmV7Bbz5TFyXQ"

  constructor( public http: HttpClient) { }

  getQuote(){
    let headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host" : this.host,
        "x-rapidapi-key" : this.key,
        "accept" : "application/json"
      })
    }
    return this.http.get<Quote>(this.url, headers);

  }
  

}
