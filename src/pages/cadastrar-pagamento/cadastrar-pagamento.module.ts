import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarPagamentoPage } from './cadastrar-pagamento';

@NgModule({
  declarations: [
    CadastrarPagamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarPagamentoPage),
  ],
})
export class CadastrarPagamentoPageModule {}
