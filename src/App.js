import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import DetailedViewPage from './DetailedView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/users/:userId" element={<DetailedViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
