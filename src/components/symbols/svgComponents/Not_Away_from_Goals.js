import { motion } from 'framer-motion'
export const index = '91'
export const name = 'Not Away from Goals'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M30 94C30 113.882 46.1178 130 66 130C85.8823 130 102 113.882 102 94C102 74.1178 85.8823 58 66 58C46.1178 58 30 74.1178 30 94Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M10 75C10 94.8823 26.1178 111 46 111C65.8823 111 82 94.8823 82 75C82 55.1178 65.8823 39 46 39C26.1178 39 10 55.1178 10 75Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M30 56C30 75.8823 46.1178 92 66 92C85.8823 92 102 75.8823 102 56C102 36.1178 85.8823 20 66 20C46.1178 20 30 36.1178 30 56Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M50 75C50 94.8823 66.1178 111 86 111C105.882 111 122 94.8823 122 75C122 55.1178 105.882 39 86 39C66.1178 39 50 55.1178 50 75Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.line x1="140" y1="75" x2="98" y2="75" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
