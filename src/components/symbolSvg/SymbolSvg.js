import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { svg_pixel_size } from 'components/svgPage/Config';

const svgVariant = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2 } },
};

export const SymbolSvg = ({ children }) => {
  const { symbol_id } = useParams();

  return (
    <motion.svg
      viewBox={`0 0 ${svg_pixel_size} ${svg_pixel_size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      variants={svgVariant}
      style={{ height: 'inherit', width: 'inherit' }}
      initial={symbol_id ? 'visible' : 'hidden'}
      animate={'visible'}>
      {children}
    </motion.svg>
  );
};
