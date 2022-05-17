import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './SvgContainer.module.css';
import { summaryContext } from './../SymbolSummary';

export const SvgContainer = ({ children }) => {
  const navigate = useNavigate();
  const { isSymbolPage, symbol_id } = useContext(summaryContext);

  return (
    <motion.div
      className={
        isSymbolPage ? styles.pageSvgContainer : styles.summarySvgContainer
      }
      {...(!isSymbolPage && {
        onClick: () => navigate(`/symbol/${symbol_id}`),
      })}>
      {children}
    </motion.div>
  );
};
