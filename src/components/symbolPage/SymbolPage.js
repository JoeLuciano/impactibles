import { SymbolSummary } from '../symbolSummary/SymbolSummary';
import { motion } from 'framer-motion';
import styles from './SymbolPage.module.css';
import { useContext } from 'react';
import { symbolSvgContext } from 'App';
import { useParams } from 'react-router-dom';
import { svg_pixel_size } from 'config/Config';

export const SymbolPage = () => {
  const { symbolSvgJson } = useContext(symbolSvgContext);
  const { symbol_id } = useParams();

  return (
    <motion.div className={styles.symbolPageContainer}>
      <SymbolSummary isSymbolPage>
        {symbolSvgJson[symbol_id] && symbolSvgJson[symbol_id](svg_pixel_size)}
      </SymbolSummary>
    </motion.div>
  );
};
