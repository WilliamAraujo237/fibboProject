package com.fibbo.fibbo.Repository;

import com.fibbo.fibbo.DTO.ProdutoDTO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public interface ProdutoRepository extends CrudRepository<ProdutoDTO,Long> {

}
