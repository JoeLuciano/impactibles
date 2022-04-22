import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from './HeroSymbolSvg.module.css';
import { HoverSquare } from 'components/svgPage/hoverCircle/HoverCircle';
import {
  svg_pixel_size,
  hover_duration,
  selection_duration,
} from 'components/svgPage/Config';
import { SymbolContext } from 'App';

const svgContainer = {
  static: { scale: 1 },
  focus: { zIndex: 1, scale: 1.2, transition: { duration: hover_duration } },
  selected: {
    zIndex: 2,
    scale: 1.5,
    transition: { duration: selection_duration },
  },
};

const svgVariant = {
  hidden: {},
  visible: {},
};

export const HeroSymbolSvg = ({ children }) => {
  const { symbol_id } = useParams();
  const symbolIndex = children.props.index;
  const [svgState, setSvgState] = useState(
    symbol_id === symbolIndex ? 'selected' : 'static'
  );
  const controls = useAnimation();

  const { selectedSymbolIndex, setSelectedSymbolIndex } =
    useContext(SymbolContext);

  useEffect(() => {
    controls.start(svgState);
  }, [controls, svgState]);

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
        if (selectedSymbolIndex === symbolIndex && svgState === 'selected') {
          setSvgState('focus');
          setSelectedSymbolIndex('');
        } else if (!selectedSymbolIndex) {
          setSvgState('selected');
          setSelectedSymbolIndex(symbolIndex);
        }
      }}>
      <motion.svg
        viewBox={`0 0 ${svg_pixel_size} ${svg_pixel_size}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        variants={svgVariant}
        style={{ height: 'inherit', width: 'inherit' }}
        initial='hidden'
        animate='visible'>
        <HoverSquare controls={controls} />
        {children}
      </motion.svg>
    </motion.div>
  );
};
