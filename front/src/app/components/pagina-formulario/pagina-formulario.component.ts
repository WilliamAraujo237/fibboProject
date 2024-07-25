import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { produto } from '../../interface/produto-interface';  
import { ProdutoService } from '../../services/pagina-inicial-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-formulario.component.html',
  styleUrls: ['./pagina-formulario.component.css']
})
export class PaginaFormularioComponent {
  produto: produto = { 
    id: 0,
    nome: '',
    quantidade: 0,
    valor: 0
  };

  constructor(private produtoService: ProdutoService) {}

  enviar(): void {
    if (this.produto.id) {
      this.atualizarProduto(); 
    } else {
      this.registrarProduto(); 
    }
  }

  registrarProduto(): void {
    this.produtoService.registrarProduto(this.produto).subscribe(() => {
      alert('Produto registrado com sucesso!');
      this.limparFormulario(); 
    }, error => {
      alert('Erro ao registrar produto: ' + error.message); 
    });
  }

  atualizarProduto(): void {
    this.produtoService.atualizarProduto(this.produto).subscribe(() => {
      alert('Produto atualizado com sucesso!');
      this.limparFormulario(); 
    }, error => {
      alert('Erro ao atualizar produto: ' + error.message); 
    });
  }

  limparFormulario(): void {
    this.produto = {
      id: 0,
      nome: '',
      quantidade: 0,
      valor: 0
    };
  }
}
