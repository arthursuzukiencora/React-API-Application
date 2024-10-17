import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

//import Header from './components/Header';
import './FormsAdd.css'; 
import Header from './../header/Header';

export default function FormsAdd() {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    age: '',
  });

  const { name, cpf, age } = formData;

  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  
  async function AddToDB(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/people', formData);
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  }


// se user == user chama esse, caso não chama o admin


  return (
    <div>
      <Header />
      <Box
        component="form"
        className="form-box"
        noValidate
        autoComplete="on"
        onSubmit={AddToDB}
      >
        <h1>Adicionar ao banco</h1>
        <div>
          <TextField
            required
            id="name"
            label="Nome"
            value={name}
            onChange={handleInputChange}
            className="text-field"
          />
        </div>
        <div>
          <TextField
            required
            id="cpf"
            label="CPF"
            type="number"
            value={cpf}
            onChange={handleInputChange}
            className="text-field"
          />
        </div>
        <div>
          <TextField
            required
            id="age"
            label="Idade"
            type="text"
            value={age}
            onChange={handleInputChange}
            className="text-field"
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </Box>
    </div>
  );
}
