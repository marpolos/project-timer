import './App.css';
import MyTimer from './page/Timer';
import TimerInsert from './page/TimerInsert';
// import { TimerProvider } from './hooks/useHours';

function App() {
  return (
    //<TimerProvider>
    <main>
      <link href="http://fonts.cdnfonts.com/css/spongebob-font-condensed" rel="stylesheet"></link>
      <TimerInsert />
      <footer>Criado por Marcelle Monteiro</footer>
    </main>
   // </TimerProvider>
  );
}

export default App;
