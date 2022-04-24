import { motion } from 'framer-motion'
export const index = '70'
export const name = 'Best Version'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M75.5 24L18 125H133L75.5 24Z" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.path d="M75 65L51 107H99L75 65Z" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="75" y1="65" x2="75" y2="105" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.path d="M43 93C43 110.673 57.3269 125 75 125C92.6731 125 107 110.673 107 93C107 75.3269 92.6731 61 75 61C57.3269 61 43 75.3269 43 93Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
    </>
  );
};
