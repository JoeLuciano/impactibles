import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './HeroSymbolSvg.module.css';
import { HoverSquare } from 'components/svgPage/hoverCircle/HoverCircle';
import { hover_duration, selection_duration } from 'config/Config';
import { symbolSvgContext, symbolSelectionContext } from 'App';
import { SymbolSummary } from 'components/symbolSummary/SymbolSummary';
import { svg_pixel_size } from 'config/Config';

const symbolContainer = {
  static: { scale: 1, backgroundColor: 'var(--transparent)' },
  focus: {
    zIndex: 1,
    scale: 1.2,
    transition: { duration: hover_duration },
    backgroundColor: 'var(--summary-background)',
  },
  selected: {
    zIndex: 2,
    scale: 1.5,
    transition: { duration: selection_duration },
    backgroundColor: 'var(--transparent)',
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
      className={styles.symbolContainer}
      variants={symbolContainer}
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
      }}>
      {symbol_id !== symbolIndex ? (
        <motion.div
          className={styles.svgContainer}
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
          {/* <HoverSquare controls={controls} /> */}
          {symbolSvgJson[symbolIndex] &&
            symbolSvgJson[symbolIndex](svg_pixel_size)}
        </motion.div>
      ) : (
        <SymbolSummary>
          {symbolSvgJson[symbolIndex] &&
            symbolSvgJson[symbolIndex](svg_pixel_size)}
        </SymbolSummary>
      )}
    </motion.div>
  );
};
