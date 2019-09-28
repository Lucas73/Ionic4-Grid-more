import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'
import { NavParams } from '@ionic/angular'

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  usuario = [];

  constructor(private navParams: NavParams, private popoverController: PopoverController) { }

  ngOnInit() {
    this.usuario = this.navParams.data.value;
    console.log(this.navParams.data.value);
  }
  cerrarPopover(){
    this.popoverController.dismiss()
  }

}
