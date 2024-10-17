import { useState } from "react";
import Header from './../header/Header';

function FormsUpdate(){

    function UpdateToDB(e){
        e.preventDefault()
        console.log("Item foi atualizado no banco")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <Header/>
            <h1>Mudar do banco</h1>
            <form onSubmit={UpdateToDB}>
            <div>
                <label htmlFor="name"></label>
                        <input 
                        typet="text" 
                        id = "name" 
                        name = "name" 
                        placeholder="Digite seu nome:" 
                        
                        onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                    <label htmlFor="password"></label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha: "
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>    
    )

}export default FormsUpdate