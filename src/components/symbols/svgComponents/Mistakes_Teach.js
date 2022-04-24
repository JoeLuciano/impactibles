import { motion } from 'framer-motion'
export const index = '90'
export const name = 'Mistakes Teach'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M131 22H20V127H131V22Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M20 97.5L51 47.5L66 74L90.5 46.5L97.5 97.5L131 44.5" stroke="#02DFEE" strokeWidth="2" strokeLinecap="round" variants={variant}/>
    </>
  );
};
