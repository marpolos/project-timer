import './App.css';
import MyTimer from './page/Timer';
import { TimerProvider } from './hooks/useHours';

function App() {
  return (
    <TimerProvider>
    <main>
      <MyTimer />
      <footer>Criado por Marcelle Monteiro</footer>
    </main>
    </TimerProvider>
  );
}

export default App;
