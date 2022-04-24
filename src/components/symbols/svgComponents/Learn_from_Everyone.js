import { motion } from 'framer-motion'
export const index = '21'
export const name = 'Learn from Everyone'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M23 75.5C23 103.943 46.0573 127 74.5 127C102.943 127 126 103.943 126 75.5C126 47.0573 102.943 24 74.5 24C46.0573 24 23 47.0573 23 75.5Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
    </>
  );
};
