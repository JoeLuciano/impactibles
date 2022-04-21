import { useState, useEffect, createContext } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { SvgPage } from 'components/svgPage/SvgPage';
import { SymbolPage } from 'components/symbolPage/SymbolPage';
import { motion } from 'framer-motion';
import { svg_pixel_size, drawPath } from './components/svgPage/Config';
import Symbols from 'components/symbols/Symbols.json';

const svgVariant = {
  hidden: {},
  visible: {},
};
export const SymbolContext = createContext();

const SymbolSvg = ({ children }) => {
  <motion.svg
    viewBox={`0 0 ${svg_pixel_size} ${svg_pixel_size}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    variants={svgVariant}
    style={{ height: 'inherit', width: 'inherit' }}
    initial='hidden'
    animate='visible'>
    {children}
  </motion.svg>;
};

function App() {
  const [symbolSvgs, setSymbolSvgs] = useState([]);
  const [selectedSymbolIndex, setSelectedSymbolIndex] = useState();

  useEffect(() => {
    for (var symbol_index in Symbols) {
      const symbolName = Symbols[symbol_index].name;
      if (symbolName) {
        import(`components/symbols/svgComponents/${symbolName}`).then(
          ({ index, name, Symbol }) => {
            setSymbolSvgs((prev) => [
              ...prev,
              <SymbolSvg key={index}>
                <Symbol index={index} name={name} variant={drawPath} />
              </SymbolSvg>,
            ]);
          }
        );
      }
    }
  }, []);

  return (
    <SymbolContext.Provider
      value={{
        selectedSymbolIndex: selectedSymbolIndex,
        setSelectedSymbolIndex: setSelectedSymbolIndex,
      }}>
      <Router>
        <div className='app'>
          <Routes>
            <Route path={'/'} element={<SvgPage symbolSvgs={symbolSvgs} />} />
            <Route
              path={'/:symbol_id'}
              element={<SymbolPage symbolSvgs={symbolSvgs} isPage />}
            />
          </Routes>
        </div>
      </Router>
    </SymbolContext.Provider>
  );
}

export default App;
