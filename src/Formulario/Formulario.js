function Formulario({ botao, eventoTeclado, cadastrar,
    obj, cancelar, remover, alterar }) {
    return (
        <div className="borda-formulario">
            <div>
                <div>
                    <form className="form">
                        <input
                            type="text"
                            value={obj.nome}
                            onChange={eventoTeclado}
                            name="nome"
                            placeholder="Nome"
                            className="form-control"
                            maxLength="50"
                        />
                        <input
                            type="text"
                            value={obj.marca}
                            onChange={eventoTeclado}
                            name="marca"
                            placeholder="Marca"
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
