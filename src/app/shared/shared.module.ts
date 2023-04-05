import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],

  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],

})
export class SharedModule { } //El modulo preparado para ser importado
