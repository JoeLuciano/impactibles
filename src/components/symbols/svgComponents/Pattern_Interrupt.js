import { motion } from 'framer-motion'
export const index = '92'
export const name = 'Pattern Interrupt'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M75 22L15 128H135L75 22Z" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.circle cx="74.5" cy="112.5" r="2.5" stroke="#02DFEE" strokeWidth="5" variants={variant}/>
        <motion.path d="M73 53C73 54.5 75 98.5 75 98.5C75 98.5 77 54.5 77 53C77 51.5001 73 51.4999 73 53Z" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
