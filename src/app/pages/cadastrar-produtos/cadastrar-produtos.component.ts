import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent {


  constructor(private produtoService: ProdutoService) {}

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl(0),
  });

  enviar() {
    const produto: Produto = this.produtoForm.value as Produto;
    produto.ativo = true;

    this.produtoService.cadastrarProduto(produto).subscribe(
      (result) => {
        Swal.fire(
          'PARABÉNS CHAMPS!!',
          'Produto cadastrado com sucesso!',
          'success'
        );
      },
      (error) => {
        const { message } = error;
        Swal.fire('DEU ERRO', message, 'error');
      }
    );
  }
}
