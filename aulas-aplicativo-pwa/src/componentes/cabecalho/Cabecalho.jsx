import Avatar from "../Avatar/Avatar"
import "./Cabecalho.css"

function Cabecalho(){
    return <header className="Cabecalho_root">
        <img src='/favicon.svg'/>
        <Avatar/>
    </header>
}

export default Cabecalho