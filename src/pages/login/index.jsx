import { useRef } from "react"
import { Link } from "react-router-dom"
import Header from "../componentes/header"

function Login (){
    const useRef = '/cadastro'
    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center max-w-md mx-auto mt-20 p-10 border border-gray-500 rounded-xl bg-zinc-50 shadow-xl">
                <h2 className="font-bold text-2xl mb-6 text-zinc-600">Login</h2>
                <form className="flex flex-col gap-4 mx-5 my-4 mb-8 w-full">
                    <input placeholder="E-mail" type="email" className="rounded-lg focus:outline-none"></input>
                    <input placeholder="Password" type="password" className="rounded-lg focus:outline-none"></input>
                </form>
                <button className="text-zinc-50 font-bold bg-blue-500 w-full h-8 rounded-lg hover:bg-blue-700 ">Login</button>
                <Link to={"/"} className="text-blue-600 hover:underline mt-3">Não possui uma conta ainda? Fazer cadastro</Link>
            </div>
        </div>
    )
}
export default Login