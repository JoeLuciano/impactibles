import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './SvgPage.module.css';
import { HoverCircle } from './hoverCircle/HoverCircle';
import { svg_pixel_size, hover_duration, selection_duration } from './Config';
import Symbols from 'components/symbols/Symbols.json';
import { Limitless } from 'components/symbols/svgComponents/Limitless';

const svgContainer = {
  static: { scale: 1 },
  focus: { scale: 1.2, transition: { duration: hover_duration } },
  selected: { scale: 1.5, transition: { duration: selection_duration } },
};

const svgVariant = {
  hidden: {},
  visible: {},
};

const drawPath = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 2,
        bounce: 0,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

const SymbolSvg = () => {
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
        <Limitless variant={drawPath} />
      </motion.svg>
    </motion.div>
  );
};

export const SvgPage = () => {
  return (
    <motion.div>
      <SymbolSvg />
    </motion.div>
  );
};
