import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material';

@Injectable()
export class SnackBarService {
  private snack: MatSnackBarRef<any>;

  /**
   * Inject needed services
   * @param snackBar
   */
  constructor(
    public snackBar: MatSnackBar
  ) {}

  /**
   * Show message using the MatSnackBar
   *
   * @param {string} message
   * @param {string[]} panelClass
   * @param {string} actionLabel
   * @param {number} seconds
   * @param {boolean} refreshPage
   */
  flashMessage(message: string, panelClass: string[] = [], actionLabel = 'x', seconds = 5, refreshPage = false): void {
    /**
     * snackBarConfig
     * @type {MatSnackBarConfig}
     */
    const snackBarConfig = new MatSnackBarConfig();

    // Set SnackBar display duration
    snackBarConfig.duration = seconds * 1000;

    // Add classes to the SnackBar (used for custom styling)
    snackBarConfig.panelClass = !!panelClass.length ? panelClass : null;

    // Show the SnackBar
    this.snack = this.snackBar.open(message, actionLabel, snackBarConfig);

    if (refreshPage) {
      this.snack.onAction().subscribe(() => {
        location.reload();
      });
    }
  }

  /**
   * Close the SnackBar
   */
  closeMessage() {
    this.snackBar.dismiss();
  }

}
