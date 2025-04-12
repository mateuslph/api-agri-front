import React from 'react';

const ProductList = ({ vetor, selecionar }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {vetor.map((obj, index) => (
          <div className="card m-2" style={{ width: '18rem' }} key={index}>
            <div className="card-body">
              <h5 className="card-title">{obj.nome}</h5>
              <p className="card-text">Preço: R$ {obj.preco}</p>
              <button onClick={() => selecionar(obj)} className="btn btn-primary">Selecionar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;