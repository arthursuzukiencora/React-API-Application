import React, {useState} from 'react';


function Evento({numero}){
    let contador = 1
    function MeuEvento(){
        contador = contador + 1
        console.log(`fui ativado pela ${contador} vez`)
        
    }


    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={MeuEvento}>Tu clicasse aqui {contador} vezes.</button>
            <h2></h2>
        </div>
    )
} export default Evento