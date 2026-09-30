import Principal from "../../componentes/principal/Principal";
import BotaoCustomizado from "../../componentes/Botao/BotaoCustomizado";


function PaginaInicial(){
    return <Principal>
        <BotaoCustomizado tipo='primario' aoClicar={(() => alert("Salvar clicado"))}>Salvar</BotaoCustomizado>
        <BotaoCustomizado tipo='secondario' aoClicar={(() => alert("Cancelar clicado"))}>Cancelar</BotaoCustomizado>
        <BotaoCustomizado aoClicar={(() => alert("Enviar clicado"))}>enviar</BotaoCustomizado>
    </Principal>
}

export default PaginaInicial;