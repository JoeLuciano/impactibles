import { motion } from 'framer-motion';
export const index = '13';
export const name = 'Watermelon';
export const Symbol = ({ variant }) => {
  return (
    <>
      <motion.path
        d='M74.5 64.5L74.5 79'
        stroke='#02DFEE'
        strokeWidth='4'
        variants={variant}
      />
      <motion.path
        d='M59.5 62L50.5 71'
        stroke='#02DFEE'
        strokeWidth='4'
        variants={variant}
      />
      <motion.path
        d='M98.5 70L89.5 62'
        stroke='#02DFEE'
        strokeWidth='4'
        variants={variant}
      />
      <motion.path
        d='M33 47C33 47 33 92 74.5 92C116 92 116 47 116 47M21 47C21 47 21 103 74.5 103C128 103 128 47 128 47H21Z'
        stroke='#02DFEE'
        strokeWidth='4'
        strokeLinecap='square'
        variants={variant}
      />
    </>
  );
};
