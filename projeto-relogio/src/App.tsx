import { useEffect, useState } from 'react';
import './App.css';
import { obterHoraAtual, obterDiaSemana } from './utils/tempo';

function App() {
  const [hora, setHora] = useState(obterHoraAtual());

  // Função que atualiza o estado da hora
  function atualizaHorario() {
    setHora(obterHoraAtual());
  }

  // useEffect para atualizar a hora a cada segundo
  useEffect(() => {
    const intervalo = setInterval(atualizaHorario, 1000);
    return () => clearInterval(intervalo); // limpa o intervalo ao desmontar
  }, []);

  return (
    <div>
      <p>Hoje é: {obterDiaSemana()}</p>
      <p>Hora atual: {hora}</p>
    </div>
  );
}

export default App;
