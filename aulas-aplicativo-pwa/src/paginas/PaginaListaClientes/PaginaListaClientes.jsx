import Principal from "../../componentes/Principal/Principal";
import { buscarClientes } from "../../servicos/clientes.servico";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import "./PaginaListaClientes.css"


function PaginaListaClientes(){

    const clientes = buscarClientes()

    return <Principal titulo="Lista de clientes" voltarPara="/">
        {clientes.map((cliente, index) => {
            return (<div className="listaClientes_root">
                    <h1>{cliente.nome}</h1>
                <div className="listaClientes_iconeXtexto">
                    <MdEmail id="iconeEmail" />
                    <p>{cliente.email || "Email informado"}</p>
                </div>
                <div className="listaClientes_iconeXtexto">
                    <FaCalendarDays />
                    <p>{cliente.dataNascimento || "Data de nascimento informada"}</p>
                </div>
                <div className="listaClientes_iconeXtexto">
                    <AiFillPhone />
                    <p>{cliente.telefone || "Número de telefone não informado"}</p>
                </div>
                <div className="listaClientes_iconeXtexto">
                    <SiGoogledocs />
                    <p>{cliente.cpf || "Não informado"}</p>
                </div>
            </div>)
        })}
    </Principal>
}

export default PaginaListaClientes;