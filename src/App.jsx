import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import InfoEvent from './pages/InfoEvent/InfoEvent';
import EditEvent from './pages/EditEvent/EditEvent';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Background>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/info-event" element={<InfoEvent />} />
          <Route path="/edit-event" element={<EditEvent />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
      </Background>
    </>
  );
}

export default App;
