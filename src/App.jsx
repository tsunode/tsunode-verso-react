import { MdEmail } from 'react-icons/md';
import Card from './components/Card';

import Input from "./components/Input"

import GlobalStyle from "./styles/GlobalStyle"

import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Dashboard />

      {/* <Input label='Nome:' id='name' type='text' name='name'>
        teste
      </Input>

      <Input label='Email:' id='email' type='email' name='email'>
        <MdEmail />
      </Input>

      <Input label='Senha:' id='password' type='password' name='password'>
        teste
      </Input> */}
    </div>
  )
}

export default App
