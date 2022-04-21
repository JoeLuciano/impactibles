import { useState, useEffect, createContext } from 'react';
import { motion } from 'framer-motion';
import { SymbolSvg } from 'components/svgPage/symbolSvg/SymbolSvg';
import Symbols from 'components/symbols/Symbols.json';
import { SymbolPage } from './../symbolPage/SymbolPage';

const drawPath = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 2,
        bounce: 0,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

export const SymbolContext = createContext();

export const SvgPage = () => {
  const [symbolSvgs, setSymbolSvgs] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState();

  useEffect(() => {
    for (var symbol_name in Symbols) {
      import(`components/symbols/svgComponents/${symbol_name}`).then(
        ({ Symbol, name }) => {
          setSymbolSvgs((prev) => [
            ...prev,
            <SymbolSvg key={name}>
              <Symbol name={name} variant={drawPath} />
            </SymbolSvg>,
          ]);
        }
      );
    }
  }, []);

  return (
    <SymbolContext.Provider value={{ selectedSymbol, setSelectedSymbol }}>
      <motion.div>{symbolSvgs}</motion.div>
      {selectedSymbol && <SymbolPage />}
    </SymbolContext.Provider>
  );
};
