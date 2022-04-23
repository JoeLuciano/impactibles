import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './SymbolSummary.module.css';
import { SymbolContext } from 'App';

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

  const navigate = useNavigate();
  const { symbolSvgs } = useContext(SymbolContext);
  const selectedSymbolSvg = symbolSvgs[parseInt(symbol_id)];

  return (
    <motion.div
      layoutId='SymbolPage'
      className={isSymbolPage ? styles.pageContainer : styles.summaryContainer}
      variants={containerVariant}
      animate={controls}
      {...(!isSymbolPage && {
        onClick: () => navigate(`/symbol/${symbol_id}`),
      })}>
      {selectedSymbolSvg}
    </motion.div>
  );
};