import { Component, EventEmitter, Output } from '@angular/core';
import { DialogRef } from '../custom/dialog/dialog.ref';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  response!: boolean;
  constructor(private dialogRef: DialogRef) {}

  positive() {
    this.response = true;
    this.close();
  }
  negative() {
    this.response = false;
    this.close();
  }
  close() {
    this.dialogRef.close(this.response);
  }
}
