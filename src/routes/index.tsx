import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routers";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>

  )
}