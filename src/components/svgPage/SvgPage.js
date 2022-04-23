import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { HeroSymbolSvg } from 'components/svgPage/heroSymbolSvg/HeroSymbolSvg';
import { SymbolSummary } from 'components/symbolSummary/SymbolSummary';
import styles from './SvgPage.module.css';
import { SymbolContext } from 'App';

export const SvgPage = () => {
  const [heroSymbolSvgs, setHeroSymbolSvgs] = useState([]);
  const { symbolSvgs } = useContext(SymbolContext);

  useEffect(() => {
    setHeroSymbolSvgs(
      symbolSvgs.map((symbol_svg) => (
        <HeroSymbolSvg key={symbol_svg.key}>
          {symbol_svg.props.children}
        </HeroSymbolSvg>
      ))
    );
  }, [symbolSvgs]);

  return (
    <motion.div className={styles.svgPageContainer}>
      {heroSymbolSvgs}
      <SymbolSummary />
    </motion.div>
  );
};
