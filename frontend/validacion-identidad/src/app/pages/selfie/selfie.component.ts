import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { SelfieRequest } from 'src/app/model/requests/selfie-request';
import { SelfieService } from 'src/app/services/selfie.service';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.css']
})
export class SelfieComponent implements OnInit {
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = false;
  public multipleWebcamsAvailable = false;
  public videoOptions: MediaTrackConstraints = {
    facingMode:{ exact: "user"}, //Setea que se pueda utilizar unicamente la camara trasera.
    width: { min: 640, ideal: 1280, max: 1920 },
    height: { min: 486, ideal: 720, max: 1080 }
  };

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor(private selfieService:SelfieService,
              private router:Router){}

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    console.log(error)
  }

  public handleImage(webcamImage: WebcamImage): void {
    let request:SelfieRequest = {image:webcamImage.imageAsBase64}
    this.selfieService.postSelfie(request).subscribe(response =>{
      this.router.navigate(['../datos'])
    },error=>{
      console.log(error)
    })
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
