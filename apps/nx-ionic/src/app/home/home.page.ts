import { Component } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'matchlinkers-portal-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  version: string ='';

  constructor(private appVersion: AppVersion, private platform: Platform) { 
    // this.platform.ready().then(()=> {
    //   this.appVersion.getVersionNumber().then((res)=> {
    //     this.version = res;
    //   })
    // })
   // this.addNewToGallery();
  }

  public async addNewToGallery() {
    console.log('addNewToGallery');
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

  test() {
    console.log('test');
    alert('test')
  }
}
