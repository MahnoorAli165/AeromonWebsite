import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { UserService } from '../../user.service';
import { MapsService } from '../../maps.service';
import { AgmCoreModule } from '@agm/core';
import * as firebase from 'firebase/app';
import {AngularFireDatabase,snapshotChanges} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
  flightime=[];
  maxAlt=[];
  temp=[];
 items1 =[];
 


 constructor(db : AngularFireDatabase){
  // AngularFireModule.initializeApp(environment.firebase);
 
  var query = firebase.database().ref("flightdata").orderByKey();
  query.once("value")
    .then((snapshot)=>{
    
      
      var cors = snapshot.val();
          console.log(cors);
          
    
          var keys = Object.keys(cors);
          
              for(var i=0;i<keys.length;i++){
                var k = keys[i];
                 var a = cors[k].flightime;
                 var b = cors[k].maxAlt;
                 var c = cors[k].temp;
                 this.flightime[i] = a;
                 this.maxAlt[i] = b;
                 this.temp[i] = c;
                
                
                // console.log("Key,X,Y,Z",k,a,b,c);
                
                this.items1.push(k[i]);

               }
               
               console.log("flightime",this.flightime);
               console.log("max Altitude",this.maxAlt);
               console.log("temperature",this.temp);

        // for(var j=0;j<keys.length;i++){
        //   this.items.push(t[i],u[i],v[i]);
          
        // }

        
        

  });

  
      }
  
}
