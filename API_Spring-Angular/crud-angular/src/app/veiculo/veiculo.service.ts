import { HttpClient } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Veiculo } from './veiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VeiculoService{
  constructor (private http:HttpClient){}

  private url = "http://localhost:8080/veiculos_entity";

    public recuperarVeiculos():Observable<Veiculo[]>{
        return this.http.get<any>(this.url);
    }

    public salvarVeiculo(veiculo:Veiculo):Observable<any>{
        return this.http.post<Veiculo>(this.url+"/inserir", veiculo);
    }

    public apagarVeiculos(id:number):Observable<any>{
        return this.http.delete<Veiculo>(this.url+"?id="+id);
    }

    public alterarVeiculos(veiculo:Veiculo):Observable<any>{
        return this.http.put<Veiculo>(this.url, veiculo);
    }
}
