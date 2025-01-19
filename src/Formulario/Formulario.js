function Formulario({ botao, eventoTeclado, cadastrar,
    obj, cancelar, remover, alterar }) {
    return (
        <div className="borda-formulario">
            <div>
                <div>
                    <form className="form">
                    <label htmlFor="nome" className="form-label d-flex justify-content-start">Nome:</label>
                        <input
                            type="text"
                            value={obj.nome}
                            onChange={eventoTeclado}
                            name="nome"
                            placeholder="Nome"
                            className="form-control col-3"
                            maxLength="50"
                        />
                        <label htmlFor="preco" className="form-label d-flex justify-content-start">Preço:</label>
                        <input
                            type="number"
                            value={obj.preco}
                            onChange={eventoTeclado}
                            name="preco"
                            className="form-control"
                            maxLength="50"
                        />
                        <label htmlFor="quantidade" className="form-label d-flex justify-content-start">Quantidade:</label>
                        <input
                            type="number"
                            value={obj.quantidade}
                            onChange={eventoTeclado}
                            name="quantidade"
                            className="form-control"
                            maxLength="50"
                        />
                        <label htmlFor="descricao" className="form-label d-flex justify-content-start">Descrição:</label>                      
                        <input
                            type="text"
                            value={obj.descricao}
                            onChange={eventoTeclado}
                            name="descricao"
                            placeholder="Descricao"
                            className="form-control"
                            maxLength="50"
                        />
                        {
                            botao
                                ? <input
                                    type="button"
                                    value="Cadastrar"
                                    onClick={cadastrar}
                                    className="btn btn-primary" />
                                : <div>
                                    <input
                                        type="button"
                                        value="Alterar"
                                        onClick={alterar}
                                        className="btn btn-warning"
                                    />
                                    <input
                                        type="button"
                                        value="Remover"
                                        onClick={remover}
                                        className="btn btn-danger"
                                    />
                                    <input
                                        type="button"
                                        value="Cancelar"
                                        onClick={cancelar}
                                        className="btn btn-secondary"
                                    />
                                </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
