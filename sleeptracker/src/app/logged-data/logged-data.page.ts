import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-logged-data',
  templateUrl: './logged-data.page.html',
  styleUrls: ['./logged-data.page.scss'],
})
export class LoggedDataPage implements OnInit {
    all = this.allSleepData;
    overnight = this.allOvernightData;
    sleepiness = this.allSleepinessData;
    
   
    


  constructor(
    public sleepService:SleepService,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  
  goHome(){
    this.navCtrl.navigateBack('/home');
  }
  
  get allSleepData(){
    return SleepService.AllSleepData;
  }
  
  get allOvernightData(){
    return SleepService.AllOvernightData;
  }
  
  get allSleepinessData(){
    return SleepService.AllSleepinessData;
  }
  
 

}
