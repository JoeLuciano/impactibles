import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './SymbolSummary.module.css';
import Symbol_Index from 'components/symbols/Symbols.json';
import { SvgContainer } from 'components/symbolSummary/svgContainer/SvgContainer';
import { PurchaseKeyWithSymbol } from 'components/symbolSummary/buttons/openseaLinks/purchaseKeyWithSymbol/PurchaseKeyWithSymbol';

const containerVariant = {
  hidden: { opacity: 0, zIndex: -1 },
  visible: { opacity: 1, zIndex: 3 },
};

export const SymbolSummary = ({ isSymbolPage }) => {
  const { symbol_id } = useParams();
  const controls = useAnimation();
  useEffect(() => {
    if (symbol_id || isSymbolPage) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [symbol_id, controls, isSymbolPage]);

  const [symbolName, setSymbolName] = useState();
  useEffect(() => {
    if (symbol_id) {
      setSymbolName(Symbol_Index[symbol_id].name.split('_').join(' '));
    }
  }, [symbol_id]);

  return (
    <motion.div
      layoutId='SymbolContainer'
      className={isSymbolPage ? styles.pageContainer : styles.summaryContainer}
      variants={containerVariant}
      animate={controls}>
      <SvgContainer controls={controls} isSymbolPage={isSymbolPage} />
      <motion.h1
        layoutId='SymbolName'
        className={
          isSymbolPage ? styles.pageSymbolName : styles.summarySymbolName
        }>
        {symbol_id && symbolName}
      </motion.h1>
      <motion.h3
        layoutId='SymbolDescription'
        className={
          isSymbolPage
            ? styles.pageSymbolDescription
            : styles.summarySymbolDescription
        }>
        {symbol_id && Symbol_Index[symbol_id].description}
      </motion.h3>
      <PurchaseKeyWithSymbol symbolName={symbolName} isBig={isSymbolPage} />
    </motion.div>
  );
};
