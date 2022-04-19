import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './SvgPage.module.css';
import { HoverCircle } from './hoverCircle/HoverCircle';
import { svg_pixel_size, hover_duration, selection_duration } from './Config';

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
        <motion.path
          d='M74.0895 73.5C64.8412 59.9413 56.5005 49.5 39.5895 49.5C23.9869 49.5 9.73367 61.9564 11.0895 77.5C12.3431 91.8711 25.1639 101 39.5895 101C56.0005 101 64.8877 90.9563 74.0895 77.5C75.1293 75.9794 75.5538 75.0233 76.5895 73.5C85.7916 59.9661 94.0005 49 110.59 49C125.504 49 138.354 60.5881 138.09 75.5C137.824 90.4323 124.524 101 109.59 101C93.0005 101 85.5081 90.5677 76.5895 77.5C75.5511 75.9785 75.1275 75.0218 74.0895 73.5Z'
          strokeWidth='4'
          strokeLinecap='square'
          stroke='#02DFEE'
          variants={drawPath}
        />
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
