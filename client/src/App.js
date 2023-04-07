import './App.css';
import Router from './Router';
import Header from './routes/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <GoogleMap />
        <Router />
      </header>
    </div>
  );
}

export default App;
