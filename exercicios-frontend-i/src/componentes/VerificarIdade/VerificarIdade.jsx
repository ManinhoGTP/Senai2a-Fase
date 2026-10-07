import './VerificarIdade.css';

let classes = ['VerificarIdade_root']

function VerificarIdade(prop){
  if(prop.idade >=18){

    classes.push('maior')
    return <div className={classes.join(' ')}>{prop.idade}anos, é maior de idade</div>

  }else{
    classes.push('menor')
    return <div className={classes.join(' ')}>{prop.idade} anos, é menor de idade</div>
  }
}

export default VerificarIdade;