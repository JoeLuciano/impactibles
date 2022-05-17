import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './SymbolSvg.module.css';

const svgVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const SymbolSvg = ({ children, index, viewSize }) => {
  const { symbol_id } = useParams();
  return (
    <motion.div
      layoutId={`${index}_SymbolSvgContainer`}
      className={styles.svgContainer}>
      <motion.svg
        viewBox={`0 0 ${viewSize} ${viewSize}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        variants={svgVariant}
        style={{ height: 'inherit', width: 'inherit' }}
        initial={true ? 'visible' : 'hidden'}
        animate={'visible'}>
        {children}
      </motion.svg>
    </motion.div>
  );
};
