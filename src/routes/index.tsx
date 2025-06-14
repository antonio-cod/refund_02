import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./authRouters";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>

  )
}