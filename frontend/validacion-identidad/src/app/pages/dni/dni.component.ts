import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { DniRequest } from 'src/app/model/requests/dni-request';
import { DniService } from 'src/app/services/dni.service';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = false;
  public multipleWebcamsAvailable = false;
  public videoOptions: MediaTrackConstraints = {
    facingMode:{ exact: "environment"}, //Setea que se pueda utilizar unicamente la camara trasera.
    height: { min: 1280, ideal: 1920, max: 2560 },
    width:{ min: 720, ideal: 1080, max: 1440 }
  };

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor(private dniService:DniService,
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
    let request:DniRequest = {dni:webcamImage.imageAsBase64}
    this.dniService.postDni(request).subscribe(response =>{
      this.router.navigate(['../dni/verificado'])
    },error=>{
      this.router.navigate(['../error/dni'])
    })
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
