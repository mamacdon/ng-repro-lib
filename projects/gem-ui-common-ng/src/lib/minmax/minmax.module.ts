import { NgModule } from '@angular/core';
import { MaxDirective } from './max.directive';
import { MinDirective } from './min.directive';

@NgModule({
  declarations: [MinDirective, MaxDirective],
  exports: [MinDirective, MaxDirective],
})
export class MinMaxModule { }
