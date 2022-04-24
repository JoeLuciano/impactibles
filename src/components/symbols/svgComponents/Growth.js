import { motion } from 'framer-motion'
export const index = '10'
export const name = 'Growth'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.line x1="103" y1="26" x2="103" y2="125" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.line x1="76" y1="61" x2="76" y2="125" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.line x1="50" y1="84" x2="50" y2="125" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
    </>
  );
};
