import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Background from './components/Background/Background';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Background>
        <Routes>
          <Route index element={<div />} />
          <Route path="/create-event" element={<div />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
      </Background>
    </>
  );
}

export default App;
