import './Avatar.css';

function Avatar(props){
    const nomes = props.nome.split(" ")
    let avatarTexto

    if(nomes.length > 1){
        avatarTexto = nomes[0].charAt(0) + nomes.at(-1).charAt(0)
        
        
    }else if(nomes.length == 1){
        avatarTexto = nomes[0].charAt(0)
    }
    

    return <div className='Avatar_root'>
        {avatarTexto}
    </div>

}

export default Avatar;
