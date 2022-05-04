import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import styles from './HeroSymbolSvg.module.css';
import { SymbolSvgSummary } from 'components/svgPage/symbolSvgSummary/SymbolSvgSummary';
import { hover_duration, selection_duration } from 'config/Config';
import { SymbolSvg } from 'components/symbolSvg/SymbolSvg';
import { symbolSvgContext, symbolSelectionContext } from 'App';

const svgContainer = {
  static: {
    x: 0,
    y: 0,
    zIndex: 0,
    scale: 1,
    backgroundColor: 'var(--transparent)',
  },
  focus: {
    x: 0,
    y: 0,
    zIndex: 1,
    scale: 1.2,
    backgroundColor: 'var(--light-background)',
    transition: { duration: hover_duration },
  },
  selected: {
    x: '50%',
    y: '50%',
    zIndex: 5,
    scale: 1.5,
    transition: { duration: selection_duration },
  },
};

const symbolSvgContainerVariant = {
  static: {
    x: 0,
    y: 0,
  },
  focus: {
    x: 0,
    y: 0,
  },
  selected: {
    x: '10%',
    y: '10%',
    transition: { duration: 0.5 },
  },
};

export const HeroSymbolSvg = ({ symbolIndex }) => {
  const { symbol_id } = useParams();
  const [svgState, setSvgState] = useState('static');
  const controls = useAnimation();
  const { symbolSvgJson } = useContext(symbolSvgContext);
  const { setHasSymbolBeenTapped } = useContext(symbolSelectionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (symbol_id && symbol_id === symbolIndex) {
      setSvgState('selected');
      controls.start('selected');
    } else if (svgState === 'focus') {
      controls.start('focus');
    } else {
      setSvgState('static');
      controls.start('static');
    }
  }, [symbol_id, symbolIndex, controls, svgState]);

  return (
    <motion.div
      className={styles.svgContainer}
      variants={svgContainer}
      initial='static'
      animate={controls}
      onHoverStart={() => {
        if (svgState === 'static') {
          setSvgState('focus');
        }
      }}
      onHoverEnd={() => {
        if (svgState === 'focus') {
          setSvgState('static');
        }
      }}
      onTap={() => {
        if (symbol_id === symbolIndex && svgState === 'selected') {
          setSvgState('static');
          navigate('/');
        } else if (!symbol_id) {
          setHasSymbolBeenTapped(true);
          setSvgState('selected');
          navigate(`/${symbolIndex}`);
        }
      }}>
      <AnimatePresence>
        {svgState === 'selected' ? (
          <SymbolSvgSummary>
            <motion.div
              layoutId={`SymbolSvg${symbolIndex}`}
              className={styles.symbolSvgContainer}
              variants={symbolSvgContainerVariant}>
              <SymbolSvg>{symbolSvgJson[symbolIndex]}</SymbolSvg>
            </motion.div>
          </SymbolSvgSummary>
        ) : (
          <motion.div
            layoutId={`SymbolSvg${symbolIndex}`}
            className={styles.symbolSvgContainer}
            variants={symbolSvgContainerVariant}>
            <SymbolSvg>{symbolSvgJson[symbolIndex]}</SymbolSvg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
