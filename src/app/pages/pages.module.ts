import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BreakingComponent } from './breaking/breaking.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { RouterLink, RouterModule } from '@angular/router';



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
    CommonModule,
    RouterLink,
    RouterModule
  ],
  exports: [
    BreakingComponent,
    ContactoComponent,
    HomeComponent,
    NosotrosComponent
  ]
})
export class PagesModule { }
