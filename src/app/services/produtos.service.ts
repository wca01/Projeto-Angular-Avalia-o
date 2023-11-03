import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  api = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  buscarTodos() {
    return this.http.get<Produto[]>(this.api);
  }

  cadastrarProduto(produto: Produto) {
    return this.http.post<Produto>(this.api, produto);
  }
  removeProduto(id: number){
    const api = '${this.produtoApi}/${id}';

    return this.http.delete<Produto>(this.api, this.httpOptions);
  }
  
  updateProduto(produto: Produto){
    return this.http.put(this.api, produto, this.httpOptions);
  }

}
