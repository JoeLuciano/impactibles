import { motion } from 'framer-motion'
export const index = '60'
export const name = 'Become'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M75 25L18 125H132L75 25Z" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.path d="M85.4196 50.5676L33 103.374L104.413 122.509L85.4196 50.5676Z" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.path d="M90.0676 77.1306L54 86.937L80.2612 113.198L90.0676 77.1306Z" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
