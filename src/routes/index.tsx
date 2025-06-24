import { BrowserRouter } from "react-router";
import { ManagerRoutes } from "./ManagerRoutes";
import { AuthRoutes } from "./authRouters";
import { Loading } from "../components/Loading";

const isLoading = true

export function Routes() {
  if (isLoading) {
    return <Loading />
  }
  return (
    <BrowserRouter>
      {/* <ManagerRoutes /> */}
      <AuthRoutes />
    </BrowserRouter>

  )
}