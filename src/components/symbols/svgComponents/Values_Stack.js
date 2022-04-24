import { motion } from 'framer-motion'
export const index = '64'
export const name = 'Values Stack'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M124.196 117.5H25L74.5 32L124.196 117.5Z" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.path d="M60.4592 56H88.5" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.path d="M51.5 72L98 72" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.path d="M43 87H107" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.path d="M34 102H115" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
    </>
  );
};
