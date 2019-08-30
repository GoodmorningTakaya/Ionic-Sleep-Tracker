import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})


export class HomePage implements OnInit{
    
	constructor(
        public sleepService: SleepService, 
        private navCtrl: NavController,
        ){}
    
    

	ngOnInit() {
		console.log(this.allSleepData);
	}
    
    LogSleep(){
        this.navCtrl.navigateForward('/LogSleep');
    }
    
    LogSleepiness(){
        this.navCtrl.navigateForward('/Sleepiness');
    }
    
    ViewData(){
        this.navCtrl.navigateForward('/LoggedData');
    }

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
}
