import GlobalStyle from "./styles/GlobalStyle"

import { RoutesMain as Routes } from "./routes";

import { AuthProvider } from "./providers/AuthContext";
import { ToastProvider } from "./providers/ToastContext";

import { ToastContainer } from "./components/ToastContainer";

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <ToastProvider>
        <ToastContainer />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ToastProvider>
    </>
  )
}
