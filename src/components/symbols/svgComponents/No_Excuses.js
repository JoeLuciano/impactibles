import { motion } from 'framer-motion'
export const index = '31'
export const name = 'No Excuses'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M25 75.5C25 102.838 47.1619 125 74.5 125C101.838 125 124 102.838 124 75.5C124 48.1619 101.838 26 74.5 26C47.1619 26 25 48.1619 25 75.5Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.line x1="110.362" y1="42.4649" x2="39.3617" y2="108.465" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
