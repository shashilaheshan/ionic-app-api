import {Injectable, Type} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';

import 'rxjs/Rx';
import { Content } from 'ionic-angular';

@Injectable()
export class SibService{
public http:any;
  baseUrl: String;
  regUrl:String;
   vehType:any;
    constructor( http:Http){
      this.vehType="http://sibapp.000webhostapp.com/api/getVehicleTypes";
   
  this.http=http;
  this.baseUrl="https://sibapp.000webhostapp.com/api/getPromotions";

  }
  RegisterUSer(one,two,three,four,five,six,seven,eight,nine,ten){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    this.regUrl="https://sibapp.000webhostapp.com/api/register";
     return this.http.get(this.regUrl+"/"+one+"/"+two+"/"+three+"/"+four+"/"+five+"/"+six+"/"+seven+"/"+eight+"/"+nine+"/"+"0122/071/sss")
     .map(res=>res.json());

  }
  getVehicleTypes(){

      return this.http.get(this.vehType).map(res=>res.json());
  }
  getPromotions(){
   
    
     return this.http.get(this.baseUrl)
     .map(res=> res.json());

  }

  getInsCompanies(){
      return this.http.get("https://sibapp.000webhostapp.com/api/getInsCompany").map(res=>res.json());
  }
}