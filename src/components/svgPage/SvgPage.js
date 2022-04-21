import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { HeroSymbolSvg } from 'components/svgPage/symbolSvg/HeroSymbolSvg';
import Symbols from 'components/symbols/Symbols.json';
import { SymbolSummary } from 'components/symbolPage/symbolSummary/SymbolSummary';
import { drawPath } from 'components/svgPage/Config';
import { SymbolContext } from 'App';
import styles from './SvgPage.module.css';

export const SvgPage = ({ symbolSvgs }) => {
  const [heroSymbolSvgs, setHeroSymbolSvgs] = useState([]);
  const { selectedSymbolIndex, setSelectedSymbolIndex } =
    useContext(SymbolContext);
  const selectedSymbolIndexInt = parseInt(selectedSymbolIndex);

  useEffect(() => {
    for (var symbol_index in Symbols) {
      const symbolName = Symbols[symbol_index].name;
      if (symbolName) {
        import(`components/symbols/svgComponents/${symbolName}`).then(
          ({ index, name, Symbol }) => {
            setHeroSymbolSvgs((prev) => [
              ...prev,
              <HeroSymbolSvg key={index}>
                <Symbol index={index} name={name} variant={drawPath} />
              </HeroSymbolSvg>,
            ]);
          }
        );
      }
    }
  }, []);

  return (
    <motion.div className={styles.container}>
      {heroSymbolSvgs}
      <SymbolSummary
        symbolIndex={selectedSymbolIndex}
        selectedSymbolSvg={symbolSvgs[selectedSymbolIndexInt]}
        width={'10rem'}
        height={'10rem'}
      />
    </motion.div>
  );
};
