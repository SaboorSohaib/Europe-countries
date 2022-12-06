import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
