import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class SibService{
public http:any;
baseUrl: String;
  constructor( http:Http){
this.http=http;
this.baseUrl="https://sibapp.000webhostapp.com/api/getPromotions";

  }
  getPromotions(){
    
     return this.http.get(this.baseUrl)
     .map(res=> res.json());

  }

}