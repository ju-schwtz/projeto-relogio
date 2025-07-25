import { useEffect, useState } from 'react';
import './App.css';
import { obterHoraAtual, obterDiaSemana } from './utils/tempo';
import { obterDataAtual } from './utils/data';

function App() {
  const [hora, setHora] = useState(obterHoraAtual());
  const [dataAtual, setDataAtual] = useState('');

  // Atualiza a hora a cada segundo
  useEffect(() => {
    const intervaloHora = setInterval(() => {
      setHora(obterHoraAtual());
    }, 1000);

    return () => clearInterval(intervaloHora); // limpa ao desmontar
  }, []);

  // Atualiza a data ao carregar e a cada hora
  useEffect(() => {
    const atualizarData = () => {
      setDataAtual(obterDataAtual());
    };

    atualizarData();

    const intervaloData = setInterval(atualizarData, 1000 * 60 * 60);
    return () => clearInterval(intervaloData);
  }, []);

  return (
    <div style={{ padding: '20px', fontSize: '20px' }}>
      <p>Data atual: {dataAtual}</p>
      <p>Hoje é: {obterDiaSemana()}</p>
      <h2>Horário atual: {hora}</h2>
    </div>
  );
}

export default App;

