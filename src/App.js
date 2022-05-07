import { useState, useEffect, createContext } from 'react';
import './App.css';
import { PageRoutes } from 'components/pageRoutes/PageRoutes';
import Symbol_Index from 'components/symbols/Symbols.json';
import { drawPath, symbol_order } from 'config/Config';
import { HeroSymbolSvg } from 'components/svgPage/heroSymbolSvg/HeroSymbolSvg';
import { SymbolSvg } from 'components/symbolSvg/SymbolSvg';

export const symbolSvgContext = createContext();
export const symbolSelectionContext = createContext();

function App() {
  const [hasSymbolBeenTapped, setHasSymbolBeenTapped] = useState(false);
  const [symbolSvgJson, setSymbolSvgJson] = useState({});
  const [heroSymbolSvgs, setHeroSymbolSvgs] = useState([]);

  useEffect(() => {
    setHeroSymbolSvgs(() => {
      var symbols = [];
      for (var symbol_id of symbol_order) {
        symbols.push(<HeroSymbolSvg key={symbol_id} symbolIndex={symbol_id} />);
      }
      return symbols;
    });

    setSymbolSvgJson(() => {
      var allSymbolSvgs = {};
      for (var symbol_id of symbol_order) {
        const symbolName = Symbol_Index[symbol_id].name;

        import(`components/symbols/svgComponents/${symbolName}`).then(
          ({ index, Symbol }) => {
            allSymbolSvgs[index] = (viewSize) => (
              <SymbolSvg index={index} viewSize={viewSize}>
                <Symbol variant={drawPath(index)} />
              </SymbolSvg>
            );
          }
        );
      }
      return allSymbolSvgs;
    });
  }, []);

  const getHasSymbolBeenTapped = () => {
    if (hasSymbolBeenTapped) {
      setHasSymbolBeenTapped(false);
      return true;
    }
    return false;
  };

  return (
    <symbolSelectionContext.Provider
      value={{ getHasSymbolBeenTapped, setHasSymbolBeenTapped }}>
      <symbolSvgContext.Provider value={{ symbolSvgJson, heroSymbolSvgs }}>
        <div className='app'>
          <PageRoutes />
        </div>
      </symbolSvgContext.Provider>
    </symbolSelectionContext.Provider>
  );
}

export default App;
