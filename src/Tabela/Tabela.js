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
                                <th>Marca</th>
                                <th>Selacionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vetor.map((obj, indice) => (
                                    <tr key={indice}>
                                        <td>{indice + 1}</td>
                                        <td>{obj.nome}</td>
                                        <td>{obj.marca}</td>
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
