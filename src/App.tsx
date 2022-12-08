import GlobalStyle from "./styles/GlobalStyle"
import { RoutesMain as Routes } from "./routes";
import { AuthProvider } from "./providers/AuthContext";

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}
