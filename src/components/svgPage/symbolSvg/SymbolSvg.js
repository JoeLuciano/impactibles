import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './SymbolSvg.module.css';
import { HoverCircle } from 'components/svgPage/hoverCircle/HoverCircle';
import {
  svg_pixel_size,
  hover_duration,
  selection_duration,
} from 'components/svgPage/Config';

const svgContainer = {
  static: { scale: 1 },
  focus: { scale: 1.2, transition: { duration: hover_duration } },
  selected: { scale: 1.5, transition: { duration: selection_duration } },
};

const svgVariant = {
  hidden: {},
  visible: {},
};

export const SymbolSvg = ({ children }) => {
  const [svgState, setSvgState] = useState('static');
  const controls = useAnimation();
  useEffect(() => {
    controls.start('static');
  }, [controls]);
  return (
    <motion.div
      className={styles.svgContainer}
      variants={svgContainer}
      initial='static'
      animate={controls}
      onHoverStart={() => {
        if (svgState === 'static') {
          setSvgState('focus');
          controls.start('focus');
        }
      }}
      onHoverEnd={() => {
        if (svgState === 'focus') {
          setSvgState('static');
          controls.start('static');
        }
      }}
      onTap={() => {
        if (svgState === 'selected') {
          setSvgState('focus');
          controls.start('focus');
        } else {
          setSvgState('selected');
          controls.start('selected');
        }
      }}>
      <motion.svg
        width={`${svg_pixel_size}`}
        height={`${svg_pixel_size}`}
        viewBox={`0 0 ${svg_pixel_size} ${svg_pixel_size}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ height: 'inherit', width: 'inherit' }}
        variants={svgVariant}
        initial='hidden'
        animate='visible'>
        <HoverCircle controls={controls} />
        {children}
      </motion.svg>
    </motion.div>
  );
};
