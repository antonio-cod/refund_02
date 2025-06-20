import { Navigate, useLocation } from "react-router"
import okSvg from "../assets/ok.svg"


export function Confirm() {
  const location = useLocation()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }
  return (
    <div className="bg-gray-500 lg:w-[512px] rounded-xl flex
     flex-col items-center p-10 gap-6">
      <h1 className="text-2xl font-bold text-center text-green-100">
        Solicitação enviada!
      </h1>
      <img src={okSvg} alt="Ícone de OK" className="w-28" />

      <p>
        Agora é apenas aguardar! sua solicitação sera analisada pelo
        departamento, em breve o setor entrara em contato!
      </p>

      <a href="/" className="w-full p-3 text-center bg-green-200 rounded-lg
       text-white transition ease-linear">Nova solicitação</a>
    </div>
  )
}