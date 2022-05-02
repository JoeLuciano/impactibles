import { useContext } from 'react';
import { summaryContext } from './../SymbolSummary';
import { motion } from 'framer-motion';
import styles from './SymbolNameContainer.module.css';

export const SymbolNameContainer = () => {
  const { isSymbolPage, symbol_id, symbolName } = useContext(summaryContext);

  return (
    <motion.h1
      layoutId='SymbolName'
      className={
        isSymbolPage ? styles.pageSymbolName : styles.summarySymbolName
      }>
      {symbol_id && symbolName}
    </motion.h1>
  );
};
