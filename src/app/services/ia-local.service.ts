import { Injectable } from '@angular/core';
import { pipeline } from '@xenova/transformers';

@Injectable({ providedIn: 'root' })
export class IaLocalService {
  private conversor: any;

  async carregar() {
    this.conversor = await pipeline('text-generation', 'Xenova/distilgpt2');
  }

  async responder(tema: string, pergunta: string) {
    if (!this.conversor) await this.carregar();

    const prompt = `Sou um consultor na área de ${tema}. ${pergunta}`;
    const resultado = await this.conversor(prompt, { max_new_tokens: 50 });
    return resultado[0].generated_text;
  }
}
