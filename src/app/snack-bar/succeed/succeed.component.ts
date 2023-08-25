import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-succeed',
  templateUrl: './succeed.component.html',
  styleUrls: ['./succeed.component.scss']
})
export class SucceedComponent {
  snackBarRef = inject(MatSnackBarRef);
  durationInSeconds = 5;




}
