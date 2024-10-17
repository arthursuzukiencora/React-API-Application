import { useState } from 'react';
import Header from './../header/Header';

function FormsGet() {

    function GetFromDB(e) {
        e.preventDefault();  // Previne o comportamento padrão do formulário
        console.log("Item resgatado do banco");
        console.log("Nome:", name);
        console.log("Senha:", password);
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Header/>
            <h1>Pegar do banco</h1>
            <form onSubmit={GetFromDB}>  {/* Corrigido para GetFromDB */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"  // Corrigido o erro de digitação
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome:" 
                        value={name}  // Adicionado valor controlado
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha:" 
                        value={password}  // Adicionado valor controlado
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div>
                    <input type="submit" value="Resgatar" />  {/* Alterado para "Resgatar" */}
                </div>
            </form>
        </div>    
    );
}

export default FormsGet;
