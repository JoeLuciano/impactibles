import { motion } from 'framer-motion'
export const index = '02'
export const name = 'Goal-Oriented Work'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.rect x="26" y="32" width="98" height="98" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.line x1="75" y1="20" x2="75" y2="95" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.circle cx="75" cy="81" r="46" stroke="#02DFEE" strokeWidth="4" strokeLinecap="round" variants={variant}/>
        <motion.circle cx="75" cy="81" r="13" stroke="#02DFEE" strokeWidth="4" strokeLinecap="round" variants={variant}/>
    </>
  );
};
