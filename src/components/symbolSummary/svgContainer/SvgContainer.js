import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './SvgContainer.module.css';
import { SymbolSvg } from 'components/symbolSvg/SymbolSvg';
import { symbolSvgContext } from 'App';
import { milliseconds_until_svg_context_propogates } from 'config/Config';

const containerVariant = {
  hidden: { opacity: 0, zIndex: -1 },
  visible: { opacity: 1, zIndex: 3 },
};

export const SvgContainer = ({ controls, isSymbolPage }) => {
  const navigate = useNavigate();
  const { symbol_id } = useParams();
  const [symbolSvg, setSymbolSvg] = useState();
  const { symbolSvgJson } = useContext(symbolSvgContext);

  useEffect(() => {
    async function delayGettingSvg() {
      await new Promise((res) =>
        setTimeout(res, milliseconds_until_svg_context_propogates)
      );
      setSymbolSvg(symbolSvgJson[symbol_id]);
    }
    delayGettingSvg();
  }, [symbolSvgJson, symbol_id]);

  return (
    <motion.div
      layoutId='SymbolSvg'
      className={
        isSymbolPage ? styles.pageSvgContainer : styles.summarySvgContainer
      }
      variants={containerVariant}
      animate={controls}
      {...(!isSymbolPage && {
        onClick: () => navigate(`/symbol/${symbol_id}`),
      })}>
      <SymbolSvg>{symbolSvg}</SymbolSvg>
    </motion.div>
  );
};
