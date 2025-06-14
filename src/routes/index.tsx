import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./authRouters";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <EmployeeRoutes />
    </BrowserRouter>

  )
}