import BotaoCustomizado from "../../componentes/Botao/BotaoCustomizado";

function PaginaInicial(){
    return <>
    <BotaoCustomizado tipo='primario' aoClicar={(() => alert("Salvar clicado"))}>Salvar</BotaoCustomizado>
        <BotaoCustomizado tipo='secondario' aoClicar={(() => alert("Cancelar clicado"))}>Cancelar</BotaoCustomizado>
        <BotaoCustomizado aoClicar={(() => alert("Enviar clicado"))}>enviar</BotaoCustomizado>
    </>
}

export default PaginaInicial;