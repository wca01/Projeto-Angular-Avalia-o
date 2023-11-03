import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent { produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.buscarTodos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  remover(id: number) {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
    this.produtoService.removeProduto(id).subscribe();
  }
}

/*   save() {
    if (this.produtos) {
      this.produtoService.updateProduto().subscribe() => this.buscarTodos();
   } */