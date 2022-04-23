import { motion } from 'framer-motion';
import { svg_pixel_size } from 'components/svgPage/Config';

const svgVariant = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2 } },
};

export const SymbolSvg = ({ children, controls }) => {
  return (
    <motion.svg
      viewBox={`0 0 ${svg_pixel_size} ${svg_pixel_size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      variants={svgVariant}
      style={{ height: 'inherit', width: 'inherit' }}
      initial='hidden'
      animate={controls}>
      {children}
    </motion.svg>
  );
};
