import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SymbolSummary } from 'components/symbolSummary/SymbolSummary';
import styles from './SvgPage.module.css';
import { symbolSvgContext } from 'App';
import { milliseconds_until_svg_context_propogates } from 'config/Config';

const svgPage = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const SvgPage = () => {
  const { symbol_id } = useParams();
  const { heroSymbolSvgs } = useContext(symbolSvgContext);

  const [showSymbol, setShowSymbol] = useState(Boolean(symbol_id));
  useEffect(() => {
    async function delayShow() {
      await new Promise((res) =>
        setTimeout(res, milliseconds_until_svg_context_propogates * 4)
      );
      setShowSymbol(true);
    }
    delayShow();
  }, []);

  return (
    <motion.div className={styles.svgPageContainer}>
      <motion.div
        className={styles.svgPage}
        variants={svgPage}
        initial='hidden'
        animate='visible'>
        {showSymbol && heroSymbolSvgs}
      </motion.div>
    </motion.div>
  );
};
