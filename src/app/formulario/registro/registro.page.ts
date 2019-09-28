import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  miFormulario: FormGroup;

  constructor(private formBuilderService: FormBuilder, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.miFormulario = this.formBuilderService.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.min(18), Validators.max(99)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      contraseña: ['', Validators.required],
      departamento: ['', Validators.required],
    })
  }
  cerrarModal(){
    this.modalCtrl.dismiss()
  }
  enviarMensaje(){
    let datosFormulario = this.miFormulario.value;
    console.log("Datos del formulario", datosFormulario);
    this.modalCtrl.dismiss(datosFormulario);
  }

}
