import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Background from './components/Background/Background';

function App() {
  return (
    <>
      <GlobalStyle />
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
