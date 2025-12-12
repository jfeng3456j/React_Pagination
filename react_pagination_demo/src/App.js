import './App.css';
import ApiData from './components/ApiData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Pagination demo</h1>
        <p> Check out feature (f) branch to view code implementations </p>
      </header>

      <div className='container mt-2'>
        <ApiData />
      </div>

    </div>
  );
}

export default App;
