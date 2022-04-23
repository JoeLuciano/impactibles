import { useState, useEffect, createContext } from 'react';
import './App.css';
import { drawPath } from './components/svgPage/Config';
import Symbols from 'components/symbols/Symbols.json';
import { SymbolSvg } from 'components/symbolSvg/SymbolSvg';
import { PageRoutes } from 'components/pageRoutes/PageRoutes';

export const SymbolContext = createContext();

function App() {
  const [symbolSvgs, setSymbolSvgs] = useState([]);

  useEffect(() => {
    for (var symbol_index in Symbols) {
      const symbolName = Symbols[symbol_index].name;
      if (symbolName) {
        import(`components/symbols/svgComponents/${symbolName}`).then(
          ({ index, name, Symbol }) => {
            setSymbolSvgs((prev) => [
              ...prev,
              <SymbolSvg key={index} controls='visible'>
                <Symbol index={index} name={name} variant={drawPath} />
              </SymbolSvg>,
            ]);
          }
        );
      }
    }
  }, []);

  return (
    <SymbolContext.Provider value={{ symbolSvgs }}>
      <div className='app'>
        <PageRoutes />
      </div>
    </SymbolContext.Provider>
  );
}

export default App;
