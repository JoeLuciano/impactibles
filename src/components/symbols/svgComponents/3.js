import { motion } from 'framer-motion';
export const index = '04';
export const name = '3';
export const Symbol = ({ variant }) => {
  return (
    <>
      <motion.path
        d='M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z'
        stroke='#02DFEE'
        strokeWidth='2'
        strokeLinecap='square'
        variants={variant}
      />
      <motion.path
        d='M65 59C65 59 68.8895 56 74 56C79.1105 56 83.5522 59.8898 83.5 65C83.4574 69.1786 81.0214 72.364 77 73.5M77 73.5H72M77 73.5C81 74.5 84.5849 78.6192 84.5 83.5C84.4015 89.1617 79.5 93.5 74 93.5C69 93.5 65 90 65 90'
        stroke='#02DFEE'
        strokeWidth='2'
        variants={variant}
      />
    </>
  );
};
