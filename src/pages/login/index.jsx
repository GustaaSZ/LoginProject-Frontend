import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../componentes/header"
import api from "../../services/api"

function Login() {
    // Criando uma referência para os inputs
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    // Função async pra pegar os dados ao clicar no botão de login
    async function handleLogin (event) {
        event.preventDefault() // não reinicia o frontend 

        try{ // caso dê errado
            // data = token gerado caso o login dê certo
            const { data:token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            localStorage.setItem('token', token) // guardando o token no localStorage do navegador
            // console.log(token)
            // alert('Login deu certo')

            // Navegando para a tela de listarUsuários após o login ser aprovado
            navigate('/listar-usuarios')

        } catch(err){ // tratamos aqui
            alert('Erro ao fazer login')
        }
    }

    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center max-w-md mx-auto mt-20 p-10 border border-gray-500 rounded-xl bg-gray-100 shadow-xl">
                <h2 className="font-bold text-2xl mb-6 text-zinc-600">Login</h2>
                <form className="flex flex-col gap-4 mx-5 my-4 mb-8 w-full" onSubmit={handleLogin}>
                    <input ref={emailRef} placeholder="E-mail" type="email" className="rounded-lg focus:outline-none"></input>
                    <input ref={passwordRef} placeholder="Password" type="password" className="rounded-lg focus:outline-none"></input>
                    <button className="text-zinc-50 font-bold bg-blue-500 mt-9 h-10 rounded-lg hover:bg-blue-700 ">Login</button>
                </form>
                <Link to={"/"} className="text-blue-600 hover:underline mt-3">Não possui uma conta ainda? Fazer cadastro</Link>
            </div>
        </div>
    )
}
export default Login