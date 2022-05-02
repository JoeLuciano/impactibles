import { useContext } from 'react';
import { summaryContext } from './../SymbolSummary';
import { motion } from 'framer-motion';
import styles from './SymbolDescriptionContainer.module.css';
import Symbol_Index from 'components/symbols/Symbols.json';

export const SymbolDescriptionContainer = () => {
  const { isSymbolPage, symbol_id } = useContext(summaryContext);

  return (
    <motion.h3
      layoutId='SymbolDescription'
      className={
        isSymbolPage
          ? styles.pageSymbolDescription
          : styles.summarySymbolDescription
      }>
      {symbol_id && Symbol_Index[symbol_id].description}
    </motion.h3>
  );
};
