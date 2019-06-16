import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupLineComponent } from './pickup-line/pickup-line.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PickupLineComponent, SpinnerComponent],
  exports: [PickupLineComponent]
})
export class RandomPickupLineModule { }
