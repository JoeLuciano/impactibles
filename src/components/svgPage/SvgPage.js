import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroSymbolSvg } from 'components/svgPage/heroSymbolSvg/HeroSymbolSvg';
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

  const { symbol_id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedSymbolIndex === null && symbol_id !== null) {
      setSelectedSymbolIndex(symbol_id);
    } else if (selectedSymbolIndex !== symbol_id) {
      navigate(`/${selectedSymbolIndex}`);
    }
  }, [selectedSymbolIndex, setSelectedSymbolIndex, navigate, symbol_id]);

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
        symbolIndex={selectedSymbolIndex}
        selectedSymbolSvg={symbolSvgs[selectedSymbolIndexInt]}
      />
    </motion.div>
  );
};
