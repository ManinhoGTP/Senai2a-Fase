import './ListaProdutos.css';

function ListaProdutos(prop){

  for(let i = 0; i <prop.produtos; i++){
    return <>
    <ul className='ListaProdutos_root'>
      <li>{prop.produtos[0]}</li>
      <hr />
      <li>{prop.produtos[1]}</li>
      <hr />
      <li>{prop.produtos[2]}</li>
      <hr />
      <li>{prop.produtos[3]}</li>
      <hr />
      <li>{prop.produtos[4]}</li>
      <hr />
      <li>{prop.produtos[5]}</li>
    </ul>
  </>
  }

  
}

export default ListaProdutos;