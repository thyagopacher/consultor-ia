import { IaLocalService } from '../services/ia-local.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule], // ← Add IonicModule here
})

export class HomePage {
  area = '';
  pergunta = '';
  resposta = '';

  constructor(private ia: IaLocalService) {}

  async consultar() {
    this.resposta = 'Pensando...';
    this.resposta = await this.ia.responder(this.area, this.pergunta);
  }
}
