import { useParams } from 'react-router-dom';
import { SymbolSummary } from './symbolSummary/SymbolSummary';
import { motion } from 'framer-motion';
import styles from './SymbolPage.module.css';

export const SymbolPage = ({ symbolSvgs }) => {
  const { symbol_id } = useParams();
  return (
    <motion.div className={styles.symbolPageContainer}>
      <SymbolSummary
        selectedSymbolSvg={symbolSvgs[parseInt(symbol_id)]}
        isPage
      />
    </motion.div>
  );
};
