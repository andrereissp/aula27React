import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const handLeNomeChange = (event) => {
    setNome(event.target.value);
  };

  const formularioSubmit = (event) => {
    event.preventDefault();
    alert(`Cadastro realizado para o email: ${email}`);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)} style={{color:'black', backgroundColor:'blue'}} >+</button>

      <div>
        <input type="text" placeholder="Digite seu nome" onChange={handLeNomeChange} />
        <p>Olá, {nome || 'visitanta'}</p>
      </div>

      <div>
        <form onSubmit={formularioSubmit}>
          <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
          <button type="submit"  >Cadastro</button>

          <div>
            <h4>Marque abaixo</h4>
            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
          </div>

        </form>
      </div>
    </div>
  )
}

export default App;