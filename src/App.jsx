// ARQUIVO UTLIZADO PARA O GERENCIAMENTO DE ROTAS DO PROJETO
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Login from './pages/login'

function App() {
  return (
    // Envolvendo a estrutura principal com BrowserRouter
    <BrowserRouter className='flex flex-1 items-center justify-center'>
      {/* Envolvendo a interna com Routes */}
      <Routes>
        {/* Acessando o arquivo principal com / no arquivo element = cadastro */}
        <Route path='/' element={<Cadastro />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
