import logo from './logo.svg';
import './App.css';
import { Page } from './components/Page.tsx';
import background from "./img/coming_soon.png";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${background})`}}>
        <Page/>
      </header>
    </div>
  );
}

export default App;
