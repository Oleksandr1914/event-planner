import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Background>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create-event" element={<Home />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
      </Background>
    </>
  );
}

export default App;
