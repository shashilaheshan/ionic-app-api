import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SibService} from "../../app/services/sib.service";
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
    providers:[SibService],
  selector: 'page-show-api-datas',
  templateUrl: 'show-api-datas.html',
})
export class ShowApiDatasPage {
    testCheckboxOpen: boolean;
    testCheckboxResult;
public companies:any=[];
public vehtypes:any=[];
    vehtype:any;
    companys:any;
  constructor(public alertCtrl: AlertController,private sibservice: SibService,public navCtrl: NavController, public navParams: NavParams) {
  }

ngOnInit(){

    this.sibservice.getVehicleTypes().subscribe(response=>{
      console.log(response);
      for(let i=0;i<response.vehicletypes.length;i++){
          this.vehtypes.push(response.vehicletypes[i].v_type_name);
      }

    });
}
  ionViewDidLoad() {
    this.sibservice.getInsCompanies().subscribe(response=>{

      for(var i=0;i<response.company.length;i++){
          this.companies.push(response.company[i].company_name);
      }
        console.log(this.companies);





    });
    console.log('ionViewDidLoad ShowApiDatasPage');

  }

    GetVals() {
        console.log(this.vehtype);
      console.log(this.companys);
    }
}
