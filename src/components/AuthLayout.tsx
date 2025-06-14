import { Outlet } from "react-router";

import logoSVG from "../assets/logo.svg";

export function AuthLayout(){
  return (
    <div>
      <main>
        <img src={logoSVG} alt="Logo" />
         <Outlet />
      </main>
    </div>
  )
}