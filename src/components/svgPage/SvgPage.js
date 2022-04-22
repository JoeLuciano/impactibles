import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroSymbolSvg } from 'components/svgPage/heroSymbolSvg/HeroSymbolSvg';
import Symbols from 'components/symbols/Symbols.json';
import { SymbolSummary } from 'components/symbolPage/symbolSummary/SymbolSummary';
import { drawPath } from 'components/svgPage/Config';
import styles from './SvgPage.module.css';

export const SvgPage = ({ symbolSvgs }) => {
  const [heroSymbolSvgs, setHeroSymbolSvgs] = useState([]);

  const { symbol_id } = useParams();

  const selectedSymbolIndex = parseInt(symbol_id);

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
    <motion.div className={styles.svgPageContainer}>
      {heroSymbolSvgs}
      <SymbolSummary
        symbolId={symbol_id}
        selectedSymbolSvg={symbolSvgs[selectedSymbolIndex]}
      />
    </motion.div>
  );
};
