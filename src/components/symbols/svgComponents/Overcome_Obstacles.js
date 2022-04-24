import { motion } from 'framer-motion'
export const index = '41'
export const name = 'Overcome Obstacles'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M31 119.5L75 31L119.5 119.5" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
