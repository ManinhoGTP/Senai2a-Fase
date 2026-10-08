import './OlaPessoa.css';

function OlaPessoa(prop){
  return <>
    <div className='OlaPessoa_root'>Olá, {prop.nome}!</div>
  </>
}

export default OlaPessoa;