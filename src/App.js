import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import CountriesDetalis from './components/country';
import Navbar from './components/header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar>Most Views</Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:id" element={<CountriesDetalis />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
