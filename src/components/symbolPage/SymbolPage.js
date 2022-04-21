import { useParams } from 'react-router-dom';
import { SymbolSummary } from './symbolSummary/SymbolSummary';
import { motion } from 'framer-motion';
import styles from './SymbolPage.module.css';

export const SymbolPage = ({ symbolSvgs }) => {
  const { symbol_id } = useParams();
  return (
    <motion.div className={styles.symbolPageContainer}>
      <SymbolSummary
        symbolIndex={symbol_id}
        selectedSymbolSvg={symbolSvgs[parseInt(symbol_id)]}
        width='30rem'
        height='20rem'
      />
    </motion.div>
  );
};
