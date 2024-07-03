import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Formulario from './Formulario/Formulario';
import Menu from './Menu';
import Tabela from './Tabela/Tabela';



function App() {

  // objeto prduto
  const produto = {
    id: 0,
    nome: '',
    marca: ''
  }

  // useState
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [produtos, setProdutos] = useState([])
  const [objProduto, setObjProduto] = useState(produto)
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  //useEffect
  useEffect(() => {
    fetch("http://localhost:8080/produtos/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])

  // obtendo os dados do fomulario
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value })
  }

  const cadastrar = () => {
    fetch("http://localhost:8080/produtos/cadastrar", {
      method: "post",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem)
        } else {
          setProdutos([...produtos, retorno_convertido])
          alert("Produto cadastrado com sucesso!")
          limparFormulario()
        }
      })
  }

  const alterar = () => {
    fetch("http://localhost:8080/produtos/alterar", {
      method: "put",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem)
        } else {
          let vetorTemp = [...produtos]
          let indice = vetorTemp.findIndex((prod) => {
            return prod.id === objProduto.id
          })
          vetorTemp[indice] = objProduto
          setProdutos(vetorTemp)
          alert("Produto alterado com sucesso!")
          limparFormulario()
        }
      })
  }

  const remover = () => {
    fetch(`http://localhost:8080/produtos/remover/${objProduto.id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem)
        let vetorTemp = [...produtos]
        let indice = vetorTemp.findIndex((prod) => {
          return prod.id === objProduto.id
        })
        vetorTemp.splice(indice, 1)
        setProdutos(vetorTemp)
        limparFormulario()
      })
  }

  // limpar formulario
  const limparFormulario = () => {
    setObjProduto(produto)
    setBtnCadastrar(true)
  }

  // selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice])
    setBtnCadastrar(false)
  }

  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

  // Retorno
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
  )
}

export default App;
