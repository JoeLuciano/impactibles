import { motion } from 'framer-motion';
import { stroke_width } from 'config/Config';
import styles from './SymbolSvgSummary.module.css';

const heroSymbolSummary = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
};

const hoverSelection = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    strokeLinecap: 'none',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    strokeLinecap: 'none',
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    pathLength: 0,
    strokeLinecap: 'round',
  },
};

const svgContainer = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
};

export const SymbolSvgSummary = ({ children }) => {
  return (
    <motion.div
      className={styles.heroSymbolSummary}
      variants={heroSymbolSummary}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <motion.svg className={styles.svgContainer} variants={svgContainer}>
        <motion.rect
          height='100%'
          width='100%'
          variants={hoverSelection}
          strokeWidth={stroke_width}
          stroke='var(--white)'
          fill='var(--transparent)'
        />
      </motion.svg>
      {children}
      <motion.div className={styles.summaryContent}>test</motion.div>
    </motion.div>
  );
};
