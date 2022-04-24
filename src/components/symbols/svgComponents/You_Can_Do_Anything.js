import { motion } from 'framer-motion'
export const index = '40'
export const name = 'You Can Do Anything'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M9 120L53 31.5L97.5 120" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.path d="M30 119.5L74 31L118.5 119.5" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.path d="M52 119.5L96 31L140.5 119.5" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
