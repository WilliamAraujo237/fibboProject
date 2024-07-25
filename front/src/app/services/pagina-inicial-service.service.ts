import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { produto } from '../interface/produto-interface'; // Importando a interface Produto

@Injectable({
  providedIn: 'root' // O serviço é provido na raiz da aplicação
})
export class ProdutoService {

  // URLs para as requisições HTTP
  private readonly URL = 'http://localhost:8080/ObterProdutos';
  private readonly URLDELET = 'http://localhost:8080/DeletarProduto/';
  private readonly URLGETID = 'http://localhost:8080/ObterProdutoID/';
  private readonly URLPOST = 'http://localhost:8080/RegistraProduto';
  private readonly URLPUT = 'http://localhost:8080/AtualizarProduto';

  constructor(private http: HttpClient) {}

  // Método para obter todos os produtos
  obterProdutos(): Observable<produto[]> {
    return this.http.get<produto[]>(this.URL);
  }

  // Método para deletar um produto por ID
  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URLDELET}${id}`);
  }

  // Método para obter um produto específico por ID
  obterProdutoPorId(id: number): Observable<produto> {
    return this.http.get<produto>(`${this.URLGETID}${id}`);
  }

  // Método para registrar um novo produto
  registrarProduto(produto: produto): Observable<produto> {
    return this.http.post<produto>(this.URLPOST, produto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Método para atualizar um produto existente
  atualizarProduto(produto: produto): Observable<produto> {
    return this.http.put<produto>(this.URLPUT, produto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
