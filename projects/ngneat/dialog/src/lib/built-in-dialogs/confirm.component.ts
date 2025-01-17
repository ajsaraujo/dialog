import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { ConfirmDialogContentData, DialogContentData, DialogContentSymbol } from '../types';

import { BaseDialogComponent } from './base.component';

@Component({
  selector: 'ngneat-dialog-confirm',
  template: `
    <ngneat-dialog-base>
      <svg class="icon icon-question" x="0px" y="0px" viewBox="0 0 512 512">
        <g>
          <circle cx="256" cy="378.5" r="25" />
          <path
            d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256     C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216     c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"
          />
          <path
            d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40     c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20     c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"
          />
        </g>
      </svg>

      <div class="footer">
        <div [ngSwitch]="cancelButton.type">
          <div *ngSwitchCase="'string'">
            <button class="btn btn-cancel ngneat-dialog-secondary-btn" (click)="ref.close(false)">
              {{ cancelButton.content }}
            </button>

            <button class="btn btn-success ngneat-dialog-primary-btn" (click)="ref.close(true)">
              {{ confirmButton.content }}
            </button>
          </div>

          <p *ngSwitchCase="'template'" [class.with-title]="title">
            <ng-container *ngTemplateOutlet="cancelButton.content; context: context"></ng-container>
            <ng-container *ngTemplateOutlet="confirmButton.content; context: context"></ng-container>
          </p>
        </div>
      </div>
    </ngneat-dialog-base>
  `,
  styleUrls: ['./host.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent extends BaseDialogComponent {
  confirmButton = this.confirmDialogRef.data[DialogContentSymbol].confirmButton;
  cancelButton = this.confirmDialogRef.data[DialogContentSymbol].cancelButton;

  constructor(public confirmDialogRef: DialogRef<ConfirmDialogContentData>) {
    super(confirmDialogRef);

    console.log(`Data I got: ${JSON.stringify(this.confirmDialogRef.data[DialogContentSymbol])}`);
  }
}
