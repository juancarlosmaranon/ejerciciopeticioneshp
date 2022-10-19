//PARA PODER UTILIZAR STATE NECESITAMOS
//IMPORTAR USETATE DE LA LIBRERIA REACT

import {useState} from 'react';

function Matematicas(props){

    const [resultado, setResultado] = useState(0);
    
    //inventamos un nombre de variable par el metodo del parent
    //y para la recepcion del idhijo
    const {metodoHPadre, numero} = props;

    const tripleNumero = (numero) =>{
        var triple = numero * 3;
        setResultado(triple);
    }

    return(
        <div>
            <h1>Eventos hijo --Padre</h1>
            <h3>{resultado}</h3>
            <button onClick= {()=>metodoHPadre(numero)}>
                El doble
            </button>
            <button onClick= {()=>tripleNumero(numero)}>
                El triple
            </button>
            
        </div>
    )
}

export default Matematicas;