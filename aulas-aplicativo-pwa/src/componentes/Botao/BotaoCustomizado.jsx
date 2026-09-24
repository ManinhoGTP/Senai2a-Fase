import './BotaoCustomizado.css'

function BotaoCustomizado(props){
    const classes = ['BotaoCustomizado_root']
    
    switch (props.tipo){
        case 'primario':
            classes.push("BotaoCustomizado_primario")
            break;
        case 'secondario':
            classes.push("BotaoCustomizado_secondario")
            break;
        default:
            break;
    }

    return <button className={classes.join(' ')} onClick={props.aoClicar}>{props.children}</button>
}

export default BotaoCustomizado;