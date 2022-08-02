import logo from './logo.svg';
import './App.css';

function App() {

let array1 = [1,2,3,4,5,6,7];
let array2 = [8,9,10];
let array3 = [...array1, ...array2];


console.log(array3)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
