package com.fibbo.fibbo.Service;

import com.fibbo.fibbo.DTO.ProdutoDTO;
import com.fibbo.fibbo.Repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServce {

    @Autowired
    ProdutoRepository repository;

    //Regras para cadastrar um produto
    public ResponseEntity<?> cadastro(ProdutoDTO registro){
        if (registro.getNome().equals(" ") || registro.getNome().equals("")) {
            String mensagem = "O campo nome não pode estar vazio";
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if (registro.getValor() <= 0) {
            String mensagem = "O valor do produto não pode ser menor que ou igual a 0";
            return new ResponseEntity<>(mensagem,HttpStatus.BAD_REQUEST);
        } else if (registro.getQuantidade() <= 0) {
            String mensagem = "A quantidade não pode ser menor ou igual a 0";
            return new ResponseEntity<>(mensagem,HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(repository.save(registro),HttpStatus.OK);
        }
    }

    //Regras para atualizar um produto
    public ResponseEntity<?> atualizar(ProdutoDTO registro){
        if (registro.getNome().equals(" ")) {
            String mensagem = "O campo nome não pode estar vazio";
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if (registro.getValor() <= 0) {
            String mensagem = "O valor do produto não pode ser menor que ou igual a 0";
            return new ResponseEntity<>(mensagem,HttpStatus.BAD_REQUEST);
        } else if (registro.getQuantidade() <= 0) {
            String mensagem = "A quantidade não pode ser menor ou igual a 0";
            return new ResponseEntity<>(mensagem,HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(repository.save(registro),HttpStatus.OK);
        }
    }

    //Regra para obter todos os Produtos
    public ResponseEntity<?> ObtemRegistros(){
        return new ResponseEntity<>(repository.findAll(),HttpStatus.OK);
    }

    //Regra para Deletar um Produto por ID
    public  ResponseEntity<?> DeletaRegistro(Long id){
        if (!repository.existsById(id)){
            String mensagem = "O produto com o ID fornescido não existe";
            return new ResponseEntity<>(mensagem, HttpStatus.NOT_FOUND);
        } else {
            repository.deleteById(id);
            return new ResponseEntity<>("Produto deletado com Sucesso",HttpStatus.OK);
        }
    }

    //Regra para obter apenar um Produto por ID
    public ResponseEntity<?> ObtemRegistroPorID(Long id){
        if (!repository.existsById(id)){
            String mensagem = "O produto com o ID fornescido não existe";
            return new ResponseEntity<>(mensagem, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(repository.findById(id),HttpStatus.OK);
        }
    }
}