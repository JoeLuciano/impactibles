import { SymbolSummary } from '../symbolSummary/SymbolSummary';
import { motion } from 'framer-motion';
import styles from './SymbolPage.module.css';

export const SymbolPage = () => {
  return (
    <motion.div className={styles.symbolPageContainer}>
      <SymbolSummary isSymbolPage />
    </motion.div>
  );
};
