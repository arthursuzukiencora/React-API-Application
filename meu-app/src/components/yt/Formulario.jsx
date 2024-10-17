import { useState } from "react";

function Form(){
    
    function CadastrarUsuario(e){
        e.preventDefault()
        console.log(`O usuário: ${name} foi cadastrado`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>El formulário</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input 
                    typet="text" 
                    id = "name" 
                    name = "name" 
                    placeholder="Digite seu nome:" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha: "
                    onChange={(e) => setName(e.target.value)}></input>
                </div>
                
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )

}export default Form