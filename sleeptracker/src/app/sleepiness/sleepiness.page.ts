import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})

export class SleepinessPage implements OnInit {
    sleepiness: number = 1;
    myDate: string = this.dateToday();
   
  constructor(
    public sleepService:SleepService,
    private navCtrl:NavController,
    public loadingController: LoadingController
    ) { }

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
  
  LogSleepiness(){
    this.sleepService.logSleepinessData(new StanfordSleepinessData(this.sleepiness, new Date(this.myDate)));
    
     this.navCtrl.navigateBack('/home');
  }
  
  dateToday(){
    var offset = (new Date()).getTimezoneOffset() * 60000;
    return (new Date(Date.now() - offset)).toISOString().slice(0,-1);
  }
  
  goHome(){
    this.navCtrl.navigateBack('/home');
  }
}
