import './App.css';
import Router from './Router';
import Header from './components/common/Header/Header';
import GlobalStyle from './components/common/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/media.css';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState('로그아웃');

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Router isLogin={isLogin} setIsLogin={setIsLogin} />
      </header>
    </div>
  );
}

export default App;
