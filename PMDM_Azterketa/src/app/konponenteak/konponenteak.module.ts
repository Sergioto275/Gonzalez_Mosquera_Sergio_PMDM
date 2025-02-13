import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoiburukoaComponent } from './goiburukoa/goiburukoa.component';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from '../home/home-routing.module';



@NgModule({
  declarations: [
    GoiburukoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports:[
    GoiburukoaComponent
  ]
})
export class KonponenteakModule { }
