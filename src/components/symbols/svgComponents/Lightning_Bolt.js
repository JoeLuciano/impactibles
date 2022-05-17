import { motion } from 'framer-motion';
export const index = '62';
export const name = 'Lightning Bolt';
export const Symbol = ({ variant }) => {
  return (
    <>
      <motion.path
        d='M49.5 17L72.5 48.5L36.5 43L117.5 133L79 65.5L113.5 71L81 17'
        stroke='#02DFEE'
        strokeWidth='2'
        variants={variant}
      />
      <motion.path
        d='M129 17H20V122H129V17Z'
        stroke='#02DFEE'
        strokeWidth='2'
        strokeLinecap='square'
        variants={variant}
      />
    </>
  );
};
