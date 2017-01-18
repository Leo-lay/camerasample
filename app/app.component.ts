import { Component } from "@angular/core";

import * as camera from 'nativescript-camera';
 
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    image:any;
    constructor(){
        
    }

    takePickture() {
        let options = {
            width: 600,
            height: 800,
            keepAspectRatio: false,
            saveToGallery: true
        };
        camera.takePicture(options).then(
            imageAsset => {
                console.log('imageAsset takePicture=>', imageAsset);
                imageAsset.getImageAsync(image => {
                    console.log('getImageAsync image=>', JSON.stringify(image));
                    console.log('getImageAsync image=>', image);
                    this.image = image;
                });
            }).catch(error => {
                console.log('take photo error=>', error.message);
            });
    }
}
