import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';
import { YournameService } from '../services/yourname.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController:ModalController,
    private yourNameServe:YournameService
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      mode: "ios",
      swipeToClose: true
    });
    return await modal.present();
  }

  showName;
  ngDoCheck(){
    this.showName = this.yourNameServe.yourname
    console.log(this.showName)
    if (!this.showName){
      this.showName = "Podaj imię"
    }
    console.log(this.showName)
  }
}
