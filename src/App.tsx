import { ToastContainer } from 'react-toastify';

import GlobalStyle from "./styles/GlobalStyle"
import { RoutesMain as Routes } from "./routes";
import { AuthProvider } from "./providers/AuthContext";

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <ToastContainer />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}
