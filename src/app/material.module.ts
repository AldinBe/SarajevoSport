import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
