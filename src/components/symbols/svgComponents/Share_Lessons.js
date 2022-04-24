import { motion } from 'framer-motion'
export const index = '01'
export const name = 'Share Lessons'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.rect x="25" y="22" width="102" height="98" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M9 120L54.5 47.5L68.5 72L90 47L96.5 93L141.5 23.5" stroke="#02DFEE" strokeWidth="2" strokeLinecap="round" variants={variant}/>
    </>
  );
};
