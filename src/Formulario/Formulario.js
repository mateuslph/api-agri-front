import React, { useState, useEffect } from 'react';
import './Formulario.css';

function Formulario({ obj, cadastrar, cancelar, remover, alterar }) {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    descricao: '',
  });

  useEffect(() => {
    setFormData({
      id: obj.id || '',
      nome: obj.nome || '',
      preco: obj.preco || 0,
      quantidade: obj.quantidade || 0,
      descricao: obj.descricao || '',
    });
  }, [obj]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'preco' || name === 'quantidade' ? parseFloat(value) : value,
    });
  };

  const isCreateOperation = !obj.id;

  const handleCancel = () => {
    cancelar();
    setFormData({
      id: '',
      nome: '',
      preco: 0,
      quantidade: 0,
      descricao: '',
    });
  };

  return (
    <div className="formulario-container">
      <div className="formulario-wrapper">
        <div className="formulario-content">
          <form className="formulario">
            <label htmlFor="nome" className="form-label d-flex justify-content-start">Nome:</label>
            <input
              type="text"
              value={formData.nome}
              onChange={handleInputChange}
              name="nome"
              placeholder="Nome"
              className="form-control col-3"
              maxLength="50"
            />
            <label htmlFor="preco" className="form-label d-flex justify-content-start">Preço:</label>
            <input
              type="number"
              value={formData.preco}
              onChange={handleInputChange}
              name="preco"
              className="form-control"
              maxLength="50"
            />
            <label htmlFor="quantidade" className="form-label d-flex justify-content-start">Quantidade:</label>
            <input
              type="number"
              value={formData.quantidade}
              onChange={handleInputChange}
              name="quantidade"
              className="form-control"
              maxLength="50"
            />
            <label htmlFor="descricao" className="form-label d-flex justify-content-start">Descrição:</label>
            <input
              type="text"
              value={formData.descricao}
              onChange={handleInputChange}
              name="descricao"
              placeholder="Descricao"
              className="form-control"
              maxLength="50"
            />
            {
              isCreateOperation ? (
                <input
                  type="button"
                  value="Cadastrar"
                  onClick={() => cadastrar(formData)} 
                  className="btn btn-primary"
                />
              ) : (
                <div>
                  <input
                    type="button"
                    value="Alterar"
                    onClick={() => alterar(formData)}
                    className="btn btn-warning"
                  />
                  <input
                    type="button"
                    value="Remover"
                    onClick={() => remover(obj.id)}
                    className="btn btn-danger"
                  />
                  <input
                    type="button"
                    value="Cancelar"
                    onClick={handleCancel}
                    className="btn btn-secondary"
                  />
                </div>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
}
export default Formulario;

