package com.fibbo.fibbo.Controller;

import com.fibbo.fibbo.DTO.ProdutoDTO;
import com.fibbo.fibbo.Service.ProdutoServce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    private ProdutoServce servce;

    @GetMapping("/ObterProdutos")
    public ResponseEntity<?> ObterProdutos(){
        return servce.ObtemRegistros();
    }

    @GetMapping("/ObterProdutoID/{id}")
    public ResponseEntity<?> ObterProdutoID(@PathVariable Long id){
        return servce.ObtemRegistroPorID(id);
    }

    @PostMapping("RegistraProduto")
    public ResponseEntity<?> RegistraProduto(@RequestBody ProdutoDTO produto){
        return servce.cadastro(produto);
    }

    @PutMapping("/AtualizarProduto")
    public ResponseEntity<?> AtualizarProdutos(@RequestBody ProdutoDTO produto){
        return servce.atualizar(produto);
    }

    @DeleteMapping("/DeletarProduto/{id}")
    public ResponseEntity<?> DeletarProduto(@PathVariable Long id){
        return servce.DeletaRegistro(id);
    }

}
