import { useState } from 'react';
import Header from './../header/Header';

function FormsDelete() {

    function DeletefromDB(e) {
        e.preventDefault();  // Evita o comportamento padrão de recarregar a página
        console.log("Deletado");
        console.log("Nome:", name);
        console.log("Senha:", password);
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Header/>
            <h1>Deletar do banco</h1>
            <form onSubmit={DeletefromDB}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"  // Corrigido o erro de digitação
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome:" 
                        value={name}  // Adicionado o valor controlado
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
                        value={password}  // Adicionado o valor controlado
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div>
                    <input type="submit" value="Deletar" />  {/* Alterado para "Deletar" */}
                </div>
            </form>
        </div>    
    );
}

export default FormsDelete;
