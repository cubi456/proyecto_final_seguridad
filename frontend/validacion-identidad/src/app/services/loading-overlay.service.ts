import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayLoadingComponent } from '../components/overlay-loading/overlay-loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingOverlayService {
  private overlayRef: OverlayRef | any = null;
  constructor(private overlay: Overlay) { }


  public show() {

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const loadingOverlayPortal = new ComponentPortal(OverlayLoadingComponent);
    const component = this.overlayRef.attach(loadingOverlayPortal); // Attach ComponentPortal to PortalHost
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
