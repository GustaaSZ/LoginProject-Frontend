import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../componentes/header"
import api from "../../services/api"

function Cadastro (){

    // Criando uma referência de cada Input
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    // Função pra pegar os dados ao clicar no botão de cadastrar
    async function handleSubmit(event){
        event.preventDefault() // não reinicia o frontend 

        try{ // caso dê errado
            await api.post('/cadastro', { // envia requisição no método post com os dados que o back end espera (name,email,senha)
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert(`Usuário ${nameRef.current.value} cadastrado`)
            navigate('/login') // -> se o cadastro deu certo, navega pra login
            
        } catch(err){ // trato aqui
            alert('Erro ao cadastrar usuario')
        }
    }

    return (
        
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center max-w-md mx-auto mt-20 p-10 border border-gray-500 rounded-xl bg-gray-100 shadow-xl">
                <h2 className="font-bold text-2xl mb-6 text-zinc-600">Cadastro</h2>
                {/* Passando a função  handleSubmit pra pegar os dados digitos nos inputs*/}
                <form className="flex flex-col gap-4 mx-5 my-4 mb-8 w-full" onSubmit={handleSubmit}>
                    <input ref={nameRef} placeholder="Name" type="text" className="rounded-lg focus:outline-none"></input>
                    <input ref={emailRef} placeholder="E-mail" type="email" className="rounded-lg focus:outline-none "></input>
                    <input ref={passwordRef} placeholder="Password" type="password" className="rounded-lg focus:outline-none"></input>
                    <button className="text-zinc-50 font-bold bg-blue-500 h-10 rounded-lg hover:bg-blue-700 mt-8">  Cadastar  </button>
                </form>
                <Link to={"/login"} className="text-blue-600 hover:underline mt-3">Já possui uma conta? Faça Login</Link>
            </div>
        </div>
        
    )
}
export default Cadastro


// ESTRUTURA BÁSICA

// function Cadastro (){
//     return (
//         <div></div>
//     )
// }
// export default Cadastro