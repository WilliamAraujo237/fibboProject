import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/pagina-inicial-service.service';
import { produto } from '../../interface/produto-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent implements OnInit {
  produtos: produto[] = []; 
  produtoEncontrado: produto | null = null; 
  produtoId: number = 0; 

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos(); 
  }

  carregarProdutos(): void {
    this.produtoService.obterProdutos().subscribe((data) => {
      this.produtos = data; 
    });
  }

  deletarProduto(id: number): void {
    this.produtoService.deletarProduto(id).subscribe(() => {
      this.carregarProdutos(); 
    });
  }

  procurarProduto(): void {
    if (this.produtoId <= 0) return; 

    this.produtoService.obterProdutoPorId(this.produtoId).subscribe((data) => {
      this.produtoEncontrado = data; 
    }, () => {
      this.produtoEncontrado = null;
      alert('Produto não encontrado'); 
    });
  }
}