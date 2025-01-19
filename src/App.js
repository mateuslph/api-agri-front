import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Formulario from './Formulario/Formulario';
import Menu from './Menu';
import Tabela from './Tabela/Tabela';

function App() {
  const produto = {
    id: "",
    nome: '',
    preco: 0,
    quantidade: 0,
    descricao: ''
  };

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/produtos/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  const cadastrar = async () => {
    try {
      console.log("Enviando produto para o backend:", objProduto); // Log para verificar o objeto
      const response = await fetch("http://localhost:8080/produtos/cadastrar", {
        method: "POST",
        body: JSON.stringify(objProduto),
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        }
      });

      const retorno_convertido = await response.json();

      if (retorno_convertido && retorno_convertido.id) {
        setProdutos([...produtos, retorno_convertido]);
        alert("Produto cadastrado com sucesso!");
        limparFormulario();
      } else {
        alert("Erro ao cadastrar produto. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao cadastrar produto. Tente novamente.");
    }
  };

  const alterar = async () => {
    try {
      const response = await fetch(`http://localhost:8080/produtos/alterar/${objProduto.id}`, {
        method: "PUT",
        body: JSON.stringify(objProduto),
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        }
      });

      const retorno_convertido = await response.json();

      if (retorno_convertido && retorno_convertido.id) {
        let vetorTemp = [...produtos];
        let indice = vetorTemp.findIndex((prod) => prod.id === objProduto.id);
        vetorTemp[indice] = objProduto;
        setProdutos(vetorTemp);
        alert("Produto alterado com sucesso!");
        limparFormulario();
      } else {
        alert("Erro ao alterar produto. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao alterar produto. Tente novamente.");
    }
  };

  const remover = async () => {
    try {
      const response = await fetch(`http://localhost:8080/produtos/remover/${objProduto.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        }
      });

      const retorno_convertido = await response.json();
      alert(retorno_convertido.mensagem);

      let vetorTemp = [...produtos];
      let indice = vetorTemp.findIndex((prod) => prod.id === objProduto.id);
      vetorTemp.splice(indice, 1);
      setProdutos(vetorTemp);
      limparFormulario();
    } catch (error) {
      alert("Erro ao remover produto. Tente novamente.");
    }
  };

  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  };

  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  };

  return (
    <div>
      <Menu />
      <Formulario
        botao={btnCadastrar}
        eventoTeclado={aoDigitar}
        cadastrar={cadastrar}
        obj={objProduto}
        cancelar={limparFormulario}
        remover={remover}
        alterar={alterar}
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      <Tabela
        vetor={produtos}
        selecionar={selecionarProduto}
      />
      <Footer />
    </div>
  );
}

export default App;
