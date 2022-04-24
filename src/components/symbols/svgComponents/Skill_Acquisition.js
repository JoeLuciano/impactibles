import { motion } from 'framer-motion'
export const index = '20'
export const name = 'Skill Acquisition'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M26 115H124.5V17" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.line x1="52" y1="99" x2="52" y2="134" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.line x1="76" y1="70" x2="76" y2="134" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.line x1="100" y1="36" x2="100" y2="134" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
    </>
  );
};
