import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './SvgContainer.module.css';
import { SymbolSvg } from 'components/symbolSvg/SymbolSvg';
import { symbolSvgContext } from 'App';
import { milliseconds_until_svg_context_propogates } from 'config/Config';
import { summaryContext } from './../SymbolSummary';

export const SvgContainer = () => {
  const navigate = useNavigate();
  const { symbol_id } = useParams();
  const [symbolSvg, setSymbolSvg] = useState();
  const { symbolSvgJson } = useContext(symbolSvgContext);
  const { isSymbolPage } = useContext(summaryContext);

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
      {...(!isSymbolPage && {
        onClick: () => navigate(`/symbol/${symbol_id}`),
      })}>
      <SymbolSvg>{symbolSvg}</SymbolSvg>
    </motion.div>
  );
};
