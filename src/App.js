import './App.css';
import TimerInsert from './page/TimerInsert';
// import { TimerProvider } from './hooks/useHours';

function App() {
  return (
    //<TimerProvider>
    <main>
      <h1>My Timer</h1>
      {/* <link href="http://fonts.cdnfonts.com/css/spongebob-font-condensed" rel="stylesheet"></link> */}
      <TimerInsert />
      <footer>Criado por Marcelle Monteiro</footer>
    </main>
   // </TimerProvider>
  );
}

export default App;
