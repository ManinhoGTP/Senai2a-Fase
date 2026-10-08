import './PaginaListaProdutos.css'
import Principal from "../../componentes/principal/Principal";
import BotaoCustomizado from "../../componentes/Botao/BotaoCustomizado";

const produtos = [
    {
        nome: 'Smartphone Samsung',
        preco: 2999,
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        nome: 'Notebook Acer',
        preco: 4999,
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        nome: 'Tablet Asus',
        preco: 1499,
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

function PaginaListaProdutos() {

    return <Principal titulo='Lista de produtos'>

        {produtos.map((itemProduto, index) => {
            return <div key={index} className='PaginaListaProdutos_item'>
                <h3>{itemProduto.nome}</h3>
                <strong>Preço </strong>{itemProduto.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                <br />
                <strong>Cores: </strong>

                <div className='PaginaListaProdutos_cores'>
                    {itemProduto.cores.map((itemCor, index) => {
                        return <div style={{backgroundColor: itemCor, height: 20, width: 30 }} key={index}>
                        </div>
                    })}
                </div>
            </div>
        })}

    </Principal>

}

export default PaginaListaProdutos;