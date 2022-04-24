import { motion } from 'framer-motion'
export const index = '14'
export const name = '7'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M25 75C25 102.614 47.3858 125 75 125C102.614 125 125 102.614 125 75C125 47.3858 102.614 25 75 25C47.3858 25 25 47.3858 25 75Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M65 59H85.5L73.5 92" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
    </>
  );
};
