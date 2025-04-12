import React, { useState, useEffect } from 'react';
import './Formulario.css';

function Formulario({ obj, cadastrar, alterar, remover, cancelar }) {
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');

    useEffect(() => {
        if (obj) {
            setNome(obj.nome || '');
            setMarca(obj.marca || '');
        } else {
            setNome('');
            setMarca('');
        }
    }, [obj]);

    const aoDigitarNome = (e) => setNome(e.target.value);
    const aoDigitarMarca = (e) => setMarca(e.target.value);

    const cadastrarOuAlterar = () => {
        const payload = { nome, marca };
        if (obj) {
            payload.codigo = obj.codigo;
            alterar(payload);
        } else {
            cadastrar(payload);
        }
        limparCampos();
    };

    const limparCampos = () => {
        setNome('');
        setMarca('');
        cancelar();
    };

    return (
        <div className="formulario-container">
            <input type='text' value={nome} onChange={aoDigitarNome} placeholder='Nome do produto' className='form-control' />
            <input type='text' value={marca} onChange={aoDigitarMarca} placeholder='Marca do produto' className='form-control' />

            <input type='button' value='Cadastrar' onClick={cadastrarOuAlterar} className='btn btn-primary' />
            <input type='button' value='Remover' onClick={() => remover(obj.codigo)} className='btn btn-danger' disabled={!obj} />
            <input type='button' value='Cancelar' onClick={limparCampos} className='btn btn-secondary' />
        </div>
    );
}

export default Formulario;