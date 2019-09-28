import { RegistroPage } from './../formulario/registro/registro.page';
import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaUsuarios = [];

  constructor(public modalCtr: ModalController, public popoverController: PopoverController) {}

  async abrirModal(){
    const modal = await this.modalCtr.create({
      component: RegistroPage,
    });
    await modal.present();

    let data = await modal.onWillDismiss();
    if(data.data != null && data.data!=undefined){
      this.listaUsuarios.push(data.data);
    }
  }
}
