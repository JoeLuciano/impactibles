import { motion } from 'framer-motion'
export const index = '12'
export const name = 'Be a Linchpin'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M30 75C30 99.8528 50.1472 120 75 120C99.8528 120 120 99.8528 120 75C120 50.1472 99.8528 30 75 30C50.1472 30 30 50.1472 30 75Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M62 75.5C62 82.4036 67.5964 88 74.5 88C81.4036 88 87 82.4036 87 75.5C87 68.5964 81.4036 63 74.5 63C67.5964 63 62 68.5964 62 75.5Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.line x1="75" y1="16" x2="75" y2="135" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
