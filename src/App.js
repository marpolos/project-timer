import './App.css';
import Timer from './page/Timer';
import { TimerProvider } from './hooks/useHours';

function App() {
  return (
    <TimerProvider>
    <main>
      <Timer />
      <footer>Criado por Marcelle Monteiro</footer>
    </main>
    </TimerProvider>
  );
}

export default App;
