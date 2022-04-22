import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './SymbolSummary.module.css';
import { svg_pixel_size } from 'components/svgPage/Config';

const containerVariant = {
  hidden: { opacity: 0, zIndex: -1 },
  visible: { opacity: 1, zIndex: 3 },
};

const svgVariant = {
  hidden: {},
  visible: {},
};

export const SymbolSummary = ({ selectedSymbolSvg, isPage }) => {
  const { symbol_id } = useParams();
  const controls = useAnimation();
  useEffect(() => {
    if (symbol_id || isPage) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [symbol_id, controls, isPage]);

  const navigate = useNavigate();

  return (
    <motion.div
      layoutId='SymbolPage'
      className={isPage ? styles.pageContainer : styles.summaryContainer}
      variants={containerVariant}
      animate={controls}
      {...(!isPage && { onClick: () => navigate(`/symbol/${symbol_id}`) })}>
      {symbol_id && (
        <motion.svg
          viewBox={`0 0 ${svg_pixel_size} ${svg_pixel_size}`}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          variants={svgVariant}
          style={{ height: 'inherit', width: 'inherit' }}
          initial='hidden'
          animate='visible'>
          {selectedSymbolSvg && selectedSymbolSvg.props.children}
        </motion.svg>
      )}
    </motion.div>
  );
};
