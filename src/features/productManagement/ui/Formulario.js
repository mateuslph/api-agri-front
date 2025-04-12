import React, { useState, useEffect } from 'react';
import './Formulario.css';

function Formulario({ obj, cadastrar, alterar, remover, cancelar }) {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0.0);
    const [quantidade, setQuantidade] = useState(0.0);
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (obj) {
            setNome(obj.nome || '');
            setPreco(obj.preco || 0.0);
            setQuantidade(obj.quantidade || 0.0);
            setDescricao(obj.descricao || '');
        } else {
            setNome('');
            setPreco(0.0);
            setQuantidade(0.0);
            setDescricao('');
        }
    }, [obj]);

    const aoDigitarNome = (e) => setNome(e.target.value);
    const aoDigitarPreco = (e) => setPreco(parseFloat(e.target.value));
    const aoDigitarQuantidade = (e) => setQuantidade(parseFloat(e.target.value));
    const aoDigitarDescricao = (e) => setDescricao(e.target.value);

    const cadastrarOuAlterar = () => {
        const payload = { nome, preco, quantidade, descricao };
        if (obj) {
            payload.id = obj.id;
            alterar(payload);
        } else {
            cadastrar(payload);
        }
        limparCampos();
    };
    const limparCampos = () => {
        setNome('');
        setPreco(0.0);
        setQuantidade(0.0);
        setDescricao('');
        cancelar();
    };

    return (
        <div className="formulario-container">
            <input type='text' value={nome} onChange={aoDigitarNome} placeholder='Nome do produto' className='form-control' />
            <input type='number' step='0.01' value={preco} onChange={aoDigitarPreco} placeholder='Preço do produto' className='form-control' />
            <input type='number' step='0.01' value={quantidade} onChange={aoDigitarQuantidade} placeholder='Quantidade do produto' className='form-control' />
            <input type='text' value={descricao} onChange={aoDigitarDescricao} placeholder='Descrição do produto' className='form-control' />

            <input type='button' value='Cadastrar' onClick={cadastrarOuAlterar} className='btn btn-primary' />
            <input type='button' value='Remover' onClick={() => remover(obj.codigo)} className='btn btn-danger' disabled={!obj} />
            <input type='button' value='Cancelar' onClick={limparCampos} className='btn btn-secondary' />
        </div>
    );
}

export default Formulario;