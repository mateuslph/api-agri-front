import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario/Formulario';
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

  // Retorno
  return (
    <div>
      <Formulario
        botao={btnCadastrar}
        eventoTeclado={aoDigitar}
        cadastrar={cadastrar}
        obj={objProduto}
        cancelar={limparFormulario}
        remover={remover}
        alterar={alterar}
      />
      <Tabela
        vetor={produtos}
        selecionar={selecionarProduto}
      />
    </div>
  );
}

export default App;
