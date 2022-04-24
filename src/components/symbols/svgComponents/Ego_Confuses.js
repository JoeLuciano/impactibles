import { motion } from 'framer-motion'
export const index = '51'
export const name = 'Ego Confuses'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M21 83C21 103.987 38.0132 121 59 121C79.9868 121 97 103.987 97 83C97 62.0132 79.9868 45 59 45C38.0132 45 21 62.0132 21 83Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M53 84C53 104.987 70.0132 122 91 122C111.987 122 129 104.987 129 84C129 63.0132 111.987 46 91 46C70.0132 46 53 63.0132 53 84Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M36 55C36 75.9868 53.0132 93 74 93C94.9868 93 112 75.9868 112 55C112 34.0132 94.9868 17 74 17C53.0132 17 36 34.0132 36 55Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.line x1="74" y1="93" x2="74" y2="134" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
    </>
  );
};
