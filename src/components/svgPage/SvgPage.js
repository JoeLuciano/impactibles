import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SymbolSummary } from 'components/symbolSummary/SymbolSummary';
import styles from './SvgPage.module.css';
import { symbolSvgContext } from 'App';

const svgPage = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const SvgPage = () => {
  const { symbol_id } = useParams();
  const { heroSymbolSvgs } = useContext(symbolSvgContext);

  // TODO: Figure out how to prevent hidden symbols when refreshing page after selecting a symbol
  const [showSymbol, setShowSymbol] = useState(Boolean(symbol_id));
  useEffect(() => {
    async function delayShow() {
      await new Promise((res) => setTimeout(res, 200));
      setShowSymbol(true);
    }
    delayShow();
  });

  return (
    <motion.div
      className={styles.svgPageContainer}
      variants={svgPage}
      initial='hidden'
      animate='visible'>
      {showSymbol && heroSymbolSvgs.length === 50 && heroSymbolSvgs}
      <SymbolSummary />
    </motion.div>
  );
};
