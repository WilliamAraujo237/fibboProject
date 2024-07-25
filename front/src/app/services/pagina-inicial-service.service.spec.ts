import { TestBed } from '@angular/core/testing';

import { ProdutoService } from './pagina-inicial-service.service';

describe('PaginaInicialServiceService', () => {
  let service: ProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
