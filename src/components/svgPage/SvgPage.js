import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroSymbolSvg } from 'components/svgPage/heroSymbolSvg/HeroSymbolSvg';
import { SymbolSummary } from 'components/symbolSummary/SymbolSummary';
import styles from './SvgPage.module.css';

export const SvgPage = () => {
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
      ...['80', '81', '83'],
      ...['90'],
    ];
    setHeroSymbolSvgs((prev) => {
      var symbols = [];
      for (var symbol_id of symbol_order) {
        symbols.push(<HeroSymbolSvg key={symbol_id} symbolIndex={symbol_id} />);
      }
      return symbols;
    });
  }, []);

  return (
    <motion.div className={styles.svgPageContainer}>
      {heroSymbolSvgs}
      <SymbolSummary />
    </motion.div>
  );
};
