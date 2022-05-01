import { useState, useEffect, createContext } from 'react';
import './App.css';
import { PageRoutes } from 'components/pageRoutes/PageRoutes';
import Symbol_Index from 'components/symbols/Symbols.json';
import { drawPath, symbol_order } from 'config/Config';
import { HeroSymbolSvg } from 'components/svgPage/heroSymbolSvg/HeroSymbolSvg';

export const symbolSvgContext = createContext();

function App() {
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
          ({ index, name, description, Symbol }) => {
            allSymbolSvgs[index] = (
              <Symbol
                index={index}
                name={name}
                description={description}
                variant={drawPath(index)}
              />
            );
          }
        );
      }
      return allSymbolSvgs;
    });
  }, []);

  return (
    <symbolSvgContext.Provider value={{ symbolSvgJson, heroSymbolSvgs }}>
      <div className='app'>
        <PageRoutes />
      </div>
    </symbolSvgContext.Provider>
  );
}

export default App;
