function Tabela({ vetor, selecionar }) {
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vetor.map((obj, indice) => (
                                    <tr key={indice}>
                                        <td>{indice + 1}</td>
                                        <td>{obj.nome}</td>
                                        <td>{obj.preco}</td>
                                        <td>{obj.quantidade}</td>
                                        <td>{obj.descricao}</td>
                                        <td>
                                            <button
                                                id="botao-selecionar"
                                                onClick={() => { selecionar(indice) }} // Chamando selecionar com o índice
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
    )
}

export default Tabela
