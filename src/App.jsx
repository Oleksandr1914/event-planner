import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<div />} />
        <Route path="/create-event" element={<div />} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
