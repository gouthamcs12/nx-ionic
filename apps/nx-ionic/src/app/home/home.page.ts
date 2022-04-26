import { Component } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'matchlinkers-portal-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  version: string ='';

  constructor(private appVersion: AppVersion, private platform: Platform) { 
    this.platform.ready().then(()=> {
      this.appVersion.getVersionNumber().then((res)=> {
        this.version = res;
      })
    })
  }
}
