import holbertonLogo from './holbertonLogo.jpg';
import './App.css';
import {getFullYear ,getFooterCopy} from './utils';

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
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </>
  );
}

export default App;
