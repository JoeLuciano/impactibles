import { motion } from 'framer-motion'
export const index = '80'
export const name = 'Safe Mistakes'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M51 36L20 86V116H131V33L97.5 86L90.5 35L66 62.5L51 36Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="round" variants={variant}/>
    </>
  );
};
