import { AuthContext } from "./contexts/AuthContext";
import { Routes } from "./routes";

export function App(){
  return (
    <AuthContext.Provider value={{ name: "Antonio"}}>

      <Routes />
    </AuthContext.Provider>
  )
}