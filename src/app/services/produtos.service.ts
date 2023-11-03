import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  api = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get<Produto[]>(this.api);
  }

  cadastrarProduto(produto: Produto) {
    return this.http.post<Produto>(this.api, produto);
  }
}
