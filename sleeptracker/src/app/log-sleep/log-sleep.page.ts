import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';



@Component({
  selector: 'app-log-sleep',
  templateUrl: './log-sleep.page.html',
  styleUrls: ['./log-sleep.page.scss'],
})

export class LogSleepPage implements OnInit {
    StartDate:string = this.dateToday();
    EndDate:string = this.dateToday();
 

  constructor(
        public sleepService:SleepService, 
        private navCtrl: NavController,
        public loadingController: LoadingController
        ){}

  ngOnInit() {
  }
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "crescent",
      duration: 200,
      message: 'Logging Entry...',
      translucent: true
      
      
    });
    return await loading.present();
  }
  goHome(){
    this.navCtrl.navigateBack('/home');
  }
  
  dateToday(){
    var offset = (new Date()).getTimezoneOffset() * 60000;
    return (new Date(Date.now() - offset)).toISOString().slice(0,-1);
  }
  
  LogSleep(){
  
    this.sleepService.logOvernightData(new OvernightSleepData(new Date(this.StartDate), new Date(this.EndDate)));
    
    this.navCtrl.navigateBack('/home');
    
  }

}
