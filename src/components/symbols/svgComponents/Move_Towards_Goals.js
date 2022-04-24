import { motion } from 'framer-motion'
export const index = '81'
export const name = 'Move Towards Goals'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M24 82C24 110.167 46.8335 133 75 133C103.167 133 126 110.167 126 82C126 53.8335 103.167 31 75 31C46.8335 31 24 53.8335 24 82Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M43 82C43 99.6731 57.3269 114 75 114C92.6731 114 107 99.6731 107 82C107 64.3269 92.6731 50 75 50C57.3269 50 43 64.3269 43 82Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M60 82C60 90.2843 66.7157 97 75 97C83.2843 97 90 90.2843 90 82C90 73.7157 83.2843 67 75 67C66.7157 67 60 73.7157 60 82Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.line x1="75" y1="17" x2="75" y2="97" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
