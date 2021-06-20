import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { YournameService } from 'src/app/services/yourname.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(
    private modalController:ModalController,
    private yourNameService:YournameService
  ) { }

  ngOnInit() {}
  dismiss() {
    this.modalController.dismiss();
  }

  yourName:any;

  getData(){
    this.yourNameService.yourname = this.yourName;
  }
}
