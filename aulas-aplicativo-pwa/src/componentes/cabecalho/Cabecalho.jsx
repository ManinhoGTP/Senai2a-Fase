import Avatar from "../Avatar/Avatar"
import "./Cabecalho.css"

const dataAtual = new Date()

function Cabecalho(){
    return <header className="Cabecalho_root">
        <img src='/favicon.svg'/>
        <Avatar nome="Gabriel" foto="">
            filhoTeste
        </Avatar>
    </header>
}

export default Cabecalho