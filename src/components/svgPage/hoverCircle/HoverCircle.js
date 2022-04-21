import { motion } from 'framer-motion';
import {
  svg_pixel_size,
  stroke_width,
  hover_duration,
  selection_duration,
} from './../Config';

const hoverSelection = {
  static: {
    scale: 0,
    opacity: 0,
    pathLength: 0,
    backgroundColor: 'var(--transparent)',
    strokeLinecap: 'none',
  },
  focus: {
    scale: 1,
    opacity: 0.5,
    pathLength: 0,
    backgroundColor: 'var(--light-background)',
    strokeLinecap: 'none',
    transition: {
      duration: hover_duration,
    },
  },
  selected: {
    scale: 1,
    opacity: 1,
    pathLength: 1,
    backgroundColor: 'var(--light-background)',
    strokeLinecap: 'round',
    transition: { duration: selection_duration },
  },
};

export const HoverSquare = ({ controls }) => {
  return (
    <motion.rect
      height='100%'
      width='100%'
      cx={svg_pixel_size / 2}
      cy={svg_pixel_size / 2}
      variants={hoverSelection}
      animate={controls}
      strokeWidth={stroke_width}
      stroke='var(--white)'
      fill='var(--light-background)'
    />
  );
};
