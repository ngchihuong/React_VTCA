import logo from './logo.svg';
import './App.css';
import Embed from './Component/Embed';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Embed />
      </header>
    </div>
  );
}

export default App;
