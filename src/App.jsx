import Input from "./components/Input"
import List from "./components/List"

const App = () => {
  return (
    <div>
      <List />

      {/* props children */}
      <Input label='Nome:' id='name' type='text' name='name'>
        Teste
      </Input>

      <Input label='E-mail:' id='email' type='email' name='email' />
      <Input label='Senha:' id='password' type='password' name='password' />
    </div>
  )
}

export default App
