import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './SymbolSummary.module.css';
import Symbol_Index from 'components/symbols/Symbols.json';
import { symbolSvgContext } from 'App';
import { SymbolSvg } from 'components/symbolSvg/SymbolSvg';

const containerVariant = {
  hidden: { opacity: 0, zIndex: -1 },
  visible: { opacity: 1, zIndex: 3 },
};

const svgContainerVariant = {
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

  const { symbolSvgJson } = useContext(symbolSvgContext);

  return (
    <motion.div
      layoutId='SymbolPage'
      className={isSymbolPage ? styles.pageContainer : styles.summaryContainer}
      variants={containerVariant}
      animate={controls}>
      <motion.div
        layoutId='SymbolPageSvg'
        className={
          isSymbolPage ? styles.pageSvgContainer : styles.summarySvgContainer
        }
        variants={svgContainerVariant}
        animate={controls}
        {...(!isSymbolPage && {
          onClick: () => navigate(`/symbol/${symbol_id}`),
        })}>
        <SymbolSvg>{symbolSvgJson[symbol_id]}</SymbolSvg>
      </motion.div>
      <motion.h1
        layoutId='SymbolPageName'
        className={
          isSymbolPage ? styles.pageSymbolName : styles.summarySymbolName
        }>
        {symbol_id && Symbol_Index[symbol_id].name.split('_').join(' ')}
      </motion.h1>
      <motion.h3
        layoutId='SymbolPageDescription'
        className={
          isSymbolPage
            ? styles.pageSymbolDescription
            : styles.summarySymbolDescription
        }>
        {symbol_id && Symbol_Index[symbol_id].description}
      </motion.h3>
    </motion.div>
  );
};
