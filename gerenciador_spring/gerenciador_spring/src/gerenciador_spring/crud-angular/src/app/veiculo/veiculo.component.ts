import { Component } from '@angular/core';
import { Veiculo } from './veiculo';
import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent {
  constructor(private veiculoService:VeiculoService){};

  veiculo: Veiculo = new Veiculo
  veiculos: Veiculo[] = [];

  carregando:boolean = true;

  ngOnInit(): void {
    this.veiculo.modelo ="ford";
    this.listarVeiculos();
  }
  listarVeiculos(){
    this.carregando = true;
    this.veiculoService.recuperarVeiculos().subscribe(
      reposta => {
        this.veiculos = reposta;
      },
      erro=>{
        this.carregando = false;
        console.log(erro)
        alert("Erro ao consultar veiculo!");
      }
    )
  }
  adicionarVeiculo(): void{
    this.carregando = true;
   this.veiculoService.salvarVeiculo(this.veiculo).subscribe(
      resposta => {
        alert("Veiculo adicionado com sucesso!");
        this.limpar();
        this.listarVeiculos();
      },
      erro => {
        this.carregando = false;
        alert("Erro ao salvar um veiculo");
        console.log(erro);
      }
    )
  }
 removerVeiculo(id:number | null): void{
    this.carregando = true;
    if(id != null){
     this.veiculoService.apagarVeiculos(id).subscribe(
        resposta => {
          alert("Veiculo apagado com sucesso!");
          this.limpar();
          this.listarVeiculos();
        },
        erro => {
          this.carregando = false;
          alert("Erro ao apagar um Veiculo");
          console.log(erro);
        }
      )
    }
  }
  alterarVeiculo(veiculo:Veiculo): void{
    this.veiculo = veiculo;
  }
  limpar(): void{
    this.carregando = false;
    this.veiculo = new Veiculo;
  }
  efetuarAlteracaoVeiculo(): void{
    this.carregando = true;
    this.veiculoService.alterarVeiculos(this.veiculo).subscribe(
      resposta => {
        alert("Veiculo alterado com sucesso!");
        this.limpar();
        this.listarVeiculos();
      },
      erro => {
        this.carregando = false;
        alert("Erro ao alterar Veiculo!");
        console.log(erro);
      }
    )
  }

}
