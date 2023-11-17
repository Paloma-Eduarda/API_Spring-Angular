import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title:string = 'crud-angular';
  modelo: string = "";
  marca: string = "";
  cor: string = "";
  placa: string = "";
  reserva: string = "";
  anoDeFabricacao: string = "";
  indexSelecionado:number = 0;
  editarVeiculos = false ;

  veiculos = [{
    modelo:"palio",
    marca:"fiat",
    cor: "rosa",
    anoDeFabricacao: "2010",
    placa: "jrhw3435",
    reserva: "Disponivel",
  }]

  addVeiculo(){
    if(this.modelo !="" && this.placa !=""){
    this.veiculos.push({
      modelo: this.modelo,
    marca:this.marca,
    cor: this.cor,
    anoDeFabricacao:this.anoDeFabricacao,
    placa: this.placa,
    reserva: this.reserva,
    })
  }else{
    alert("Não é possivel adicionar veiculo sem placa ou modelo");
  }
  }
  removerVeiculo(i:number){
    this.veiculos.splice(i, 1)
  }
  editarVeiculo(i:number){
    this.editarVeiculos = true;
    this.modelo = this.veiculos[i].modelo;
    this.marca = this.veiculos[i].marca;
    this.cor = this.veiculos[i].cor;
    this.anoDeFabricacao = this.veiculos[i].anoDeFabricacao;
    this.placa = this.veiculos[i].placa;
    this.indexSelecionado = i;
  }
  efetuarAlteracaoDoVeiculo(){
    this.veiculos[this.indexSelecionado].modelo = this.modelo;
    this.veiculos[this.indexSelecionado].marca = this.marca;
    this.veiculos[this.indexSelecionado].cor = this.cor;
    this.veiculos[this.indexSelecionado].anoDeFabricacao = this.anoDeFabricacao;
    this.veiculos[this.indexSelecionado].marca = this.placa;
    this.limparDados();
  }
  limparDados(){
    this.editarVeiculos = false;
    this.marca = "";
    this.cor = "";
    this.anoDeFabricacao = "";
    this.placa = "";
    this.indexSelecionado = 0;
  }
}
