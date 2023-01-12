import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BreakingComponent } from './breaking/breaking.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    BreakingComponent,
    MisionComponent,
    VisionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
