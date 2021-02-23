// 1. IMPORTACIONES
import React from 'react'

// 2. FUNCIONES
function Features (props) {
    return (

        <div class="componente">
            <img src={props.src}/>
            <p class="encabezado">{props.text}</p>
            <p class="explicacion">{props.explanation}</p>
        </div>


    )

}

// 3. EXPORTACIONES

export default Features