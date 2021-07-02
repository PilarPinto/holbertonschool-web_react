import holbertonLogo from './holbertonLogo';
import './App.css';

function App() {

  return (
    <>
      <div className="App-header">
        <img src={ holbertonLogo } className="App-logo" alt="mainLogo"/>
        <header>
         <h1 className="Dashboard-title">School Dashboard</h1>
        </header>
      </div>
      <div className="App-body">
        <p className="paragraph-title">Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p className="paragraph-footer">Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;

