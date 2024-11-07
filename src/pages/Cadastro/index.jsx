import { useRef } from "react"
import { Link } from "react-router-dom"
import Header from "../componentes/header"

function Cadastro (){
    const useRef = '/login'
    return (
        
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center max-w-md mx-auto mt-20 p-10 border border-gray-500 rounded-xl bg-zinc-50 shadow-xl">
                <h2 className="font-bold text-2xl mb-6 text-zinc-600">Cadastro</h2>
                <form className="flex flex-col gap-4 mx-5 my-4 mb-8 w-full">
                    <input placeholder="Name" type="text" className="rounded-lg focus:outline-none"></input>
                    <input placeholder="E-mail" type="email" className="rounded-lg focus:outline-none "></input>
                    <input placeholder="password" type="password" className="rounded-lg focus:outline-none"></input>
                </form>
                <button className="text-zinc-50 font-bold bg-blue-500 w-full h-8 rounded-lg hover:bg-blue-700 ">  Cadastar  </button>
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