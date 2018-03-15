import { Http } from '@angular/http';
//import { RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the PagamentosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PagamentosProvider {
  //private API_URL = 'https://fathomless-thicket-36647.herokuapp.com/pagamentoapi/';
  private API_URL = 'http://localhost:5000/pagamentoapi/';

  constructor(public http: Http) {
    console.log('Hello PagamentosProvider Provider');
  }

  cadastrarPagamento(valor: string, tipo_pagamento: string){
    //let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //let options = new RequestOptionsArgs({ headers: headers });
    return new Promise((resolve, reject)=> {
      var data = {
        valor: valor,
        tipo_pagamento: tipo_pagamento
      };

      this.http.post(this.API_URL + 'pagamentos', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error)=>{
          reject(error.json());
        });
    });
  }
}
