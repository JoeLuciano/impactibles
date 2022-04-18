import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { SvgPage } from 'components/svgPage/SvgPage';
import { SymbolPage } from 'components/symbolPage/SymbolPage';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path={'/'} element={<SvgPage />} />
          <Route path={'/:name'} element={<SymbolPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
