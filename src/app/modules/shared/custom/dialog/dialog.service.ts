import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { DialogRef } from './dialog.ref';
import { DialogConfig } from './models/dialog.model';
import { DIALOG_DATA } from './dialog.tokens';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private injector: Injector, private overlay: Overlay) {}

  open<T, C>(component: ComponentType<T>, config?: DialogConfig<C>): DialogRef {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',
    });

    const dialogRef = new DialogRef(overlayRef);
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DialogRef, useValue: dialogRef },
        { provide: DIALOG_DATA, useValue: config?.data },
      ],
    });
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return dialogRef;
  }
}
