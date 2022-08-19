import './App.css';
import { Page } from './components/Page.tsx';
import { Login } from './components/Login.tsx';
import { Signup } from './components/Signup.tsx';
import background from "./img/coming_soon.png";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/table/lib/css/table.css';
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

function App() {
  return (
    <div className="App" className="Dark-theme">
      {/*<header className="App-header" style={{backgroundImage: `url(${background})`}}>*/}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page/>} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/*<header className="Dark-theme">*/}
      {/*  <Page/>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
