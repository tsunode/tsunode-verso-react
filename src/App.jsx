

import GlobalStyle from "./styles/GlobalStyle"

import { Dashboard } from './pages/Dashboard';
import States from "./pages/States";
import { Register } from "./pages/Register";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <Dashboard /> */}
      <Register />
    </div>
  )
}

export default App
