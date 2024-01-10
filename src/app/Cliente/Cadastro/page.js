'use client'

import React, { useState } from 'react';

const Cadastro = () => {
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: '',
    endereco: '',
    cpf: '',
    idade: '',
    email: '',
    senha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDadosCadastro((prevDados) => ({ ...prevDados, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://localhost:7178/api/Clientes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dadosCadastro),
        });
  
        if (!response.ok) {
          throw new Error('Erro ao cadastrar cliente');
        }
  
        // Aqui você pode lidar com a resposta da API, se necessário
        console.log('Cliente cadastrado com sucesso');
      } catch (error) {
        console.error('Erro ao cadastrar cliente:', error.message);
      }
    };

  return (
    <div>
      <h1>Página de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={dadosCadastro.nome} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Endereço:
          <input type="text" name="endereco" value={dadosCadastro.endereco} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          CPF:
          <input type="text" name="cpf" value={dadosCadastro.cpf} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Idade:
          <input type="text" name="idade" value={dadosCadastro.idade} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={dadosCadastro.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="senha" value={dadosCadastro.senha} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
