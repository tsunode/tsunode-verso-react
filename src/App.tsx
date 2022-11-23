import GlobalStyle from "./styles/GlobalStyle"

import { Dashboard  } from './pages/Dashboard';
import { Register } from "./pages/Register";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Dashboard />
      {/* <Register /> */}
    </div>
  )
}
