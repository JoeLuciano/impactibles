import { useState, useEffect, createContext } from 'react';
import './App.css';
import { PageRoutes } from 'components/pageRoutes/PageRoutes';
import Symbol_Index from 'components/symbols/Symbols.json';
import { drawPath } from 'components/svgPage/Config';
import { HeroSymbolSvg } from 'components/svgPage/heroSymbolSvg/HeroSymbolSvg';

export const symbolSvgContext = createContext();

function App() {
  const [symbolSvgJson, setSymbolSvgJson] = useState({});
  const [heroSymbolSvgs, setHeroSymbolSvgs] = useState([]);

  useEffect(() => {
    const symbol_order = [
      ...['00', '01', '02', '03', '04'],
      ...['10', '11', '12', '13', '14'],
      ...['20', '21', '22', '23', '24'],
      ...['30', '31', '32', '34'],
      ...['40', '41', '42', '43', '44'],
      ...['50', '51', '52', '53', '54'],
      ...['60', '61', '62', '63', '64'],
      ...['70', '71', '72', '73', '74'],
      ...['80', '81', '82', '83', '84'],
      ...['90', '91', '92', '93', '94'],
    ];

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
