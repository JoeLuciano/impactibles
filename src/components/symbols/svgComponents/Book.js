import { motion } from 'framer-motion'
export const index = '63'
export const name = 'Book'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M127 23H23V128H127V23Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.line x1="114" y1="106" x2="85" y2="106" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="75" y1="23" x2="75" y2="128" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="114" y1="45" x2="85" y2="45" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="114" y1="60" x2="85" y2="60" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="114" y1="76" x2="85" y2="76" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="114" y1="90" x2="85" y2="90" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="62" y1="106" x2="33" y2="106" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="62" y1="45" x2="33" y2="45" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="62" y1="60" x2="33" y2="60" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="62" y1="76" x2="33" y2="76" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="62" y1="90" x2="33" y2="90" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
