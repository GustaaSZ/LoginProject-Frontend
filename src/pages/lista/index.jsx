import { useInsertionEffect, useRef } from "react";
import api from "../../services/api";
import Header from "../componentes/header"
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom"

function ListarUsuarios (){
    // Criando estados, setUsers -> usado pra trocar valor de users
    const [allusers, setAllUsers] = useState()
    const navigate = useNavigate()

     // Dentro do useEffect -> usamos para o fetchUsers que precisa ser chamado toda vez que a aplicação rodar
    useEffect(() => {
        async function fetchUsers () {
            const token = localStorage.getItem('token')
            // Pegando todos os users que se encontram em data
            const {data:  { users } } = await api.get('/listar-usuarios', {
                // Pegando o token que guardamos em localStorage na page de login
                
                // Mandar o token dentro de headers.authorizaton -> onde o api espera receber o token
                headers: { Authorization: `Bearer ${token}`}
            })
            setAllUsers(users) // alocando os dados que estão chegando da api
        }
        fetchUsers()
        console.log(allusers)
    }, [])

    return (
        <div >
            <Header />
            <div className=" max-w-2xl mx-auto mt-16 p-10 border border-gray-500 rounded-xl bg-gray-100 shadow-xl " >
                <h2 className="font-bold text-2xl mb-6 text-zinc-600 text-center">Lista de Usuários Cadastrados</h2>
                <ul className="space-y-2">
                    {/* verificando se o allusers existe, se é array com length > 0 -> depois lista os users com base no id*/}
                    {allusers && allusers.length > 0 && allusers.map(user => (
                        <li key={user.id} className="flex flex-col gap-6 my-4 p-6 bg-zinc-300 rounded-2xl mx-2">
                            <div className="flex">
                                <strong className="mr-2">Id:</strong> {user.id}
                            </div>
                            <div className="flex">
                                <strong className="mr-2">Nome:</strong> {user.name}
                            </div>
                            <div className="flex">
                                <strong className="mr-2">Email:</strong> {user.email}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={() => navigate('/login')} 
                    className="text-zinc-50 text-2xl font-bold bg-blue-500 w-60 h-10 rounded-lg hover:bg-blue-700 mt-8 mb-6"
                >  Voltar  
                </button>  
            </div>
        </div>
    );
}
export default ListarUsuarios