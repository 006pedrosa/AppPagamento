import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PagamentosProvider } from '../../providers/pagamentos/pagamentos';

/**
 * Generated class for the CadastrarPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-pagamento',
  templateUrl: 'cadastrar-pagamento.html',
})
export class CadastrarPagamentoPage {
  model: Pagamento;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private pagamentoProvider: PagamentosProvider) {
    this.model = new Pagamento();
    //this.model.valor = '';
    //this.model.tipo_pagamento = '';
  }

  cadastrarPagamento(){
      this.pagamentoProvider.cadastrarPagamento(this.model.valor, this.model.tipo_pagamento)
        .then((result: any) => {
              this.toast.create({message: 'PAGAMENTO CADASTRADO'}).present();
              this.navCtrl.pop();
        })
        .catch((error: any) => {
            this.toast.create({message: 'ERRO AO CADASTRAR O PAGAMENTO'}).present();
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPagamentoPage');
  }

}

export class Pagamento{
  valor: string;
  tipo_pagamento: string;
}
