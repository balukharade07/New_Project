import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D2Component } from './d2/d2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [D2Component],
  exports : [D2Component]
})
export class MyModuleModule { }
