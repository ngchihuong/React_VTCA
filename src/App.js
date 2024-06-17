import logo from './logo.svg';
import './App.css';
import MyComponent from './Component/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn React in VTC Academy!
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
