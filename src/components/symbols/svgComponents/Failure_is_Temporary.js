import { motion } from 'framer-motion'
export const index = '11'
export const name = 'Failure is Temporary'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M126 26H24V124H126V26Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M24 67.5L77 121.5L126 26" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
    </>
  );
};
