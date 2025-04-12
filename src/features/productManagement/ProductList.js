import React from 'react';

function ProductList({ vetor, selecionar, alterar, remover }) {
  return (
    <div className="borda-tabela">
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Preco</th>
                <th>Quantidade</th>
                <th>Descricao</th>
                <th>Alterar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {
                vetor.map((obj, index) => (
                  <tr key={obj.id ? obj.id : index} > {/* Use obj.id as key if available, otherwise use index */}
                    <td>{index + 1}</td>
                    <td>{obj.nome}</td>
                    <td>{obj.preco}</td>
                    <td>{obj.quantidade}</td>
                    <td>{obj.descricao}</td>
                    <td>
                      <button
                        onClick={() => alterar(obj)}
                        className="btn btn-warning"
                      >Alterar</button>
                    </td>
                    <td>
                      <button
                         onClick={() => remover(obj)}
                         className="btn btn-danger">Remover</button>
                    </td>

                    <td>
                      <button
                        id="botao-selecionar"
                        onClick={() => { selecionar(obj) }}
                        className="btn btn-success"
                      >
                        Selecionar
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;