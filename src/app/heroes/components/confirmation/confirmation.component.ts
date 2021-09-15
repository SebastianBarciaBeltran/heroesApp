import { Component, Inject, OnInit } from '@angular/core';


// MATERIAL
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// INTERFACES
import { Heore } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
  ]
})
export class ConfirmationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heore) { }


  ngOnInit(): void {
    // console.log(this.data);
  }


  delete(){
    this.dialogRef.close(true);

  }

  close(){
      this.dialogRef.close();
  }
}
