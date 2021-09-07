import React from 'react';
import Conversor from './components/conversor'

function App() {
  return (
    <div className="caixa">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
    </div>
  );
}

export default App;
