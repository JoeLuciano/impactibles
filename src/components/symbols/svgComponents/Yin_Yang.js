import { motion } from 'framer-motion'
export const index = '23'
export const name = 'Yin Yang'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M23 75.5C23 104.495 46.5051 128 75.5 128C104.495 128 128 104.495 128 75.5C128 46.5051 104.495 23 75.5 23C46.5051 23 23 46.5051 23 75.5Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M66 50C66 55.5228 70.4772 60 76 60C81.5228 60 86 55.5228 86 50C86 44.4772 81.5228 40 76 40C70.4772 40 66 44.4772 66 50Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M66 101C66 106.523 70.4772 111 76 111C81.5228 111 86 106.523 86 101C86 95.4772 81.5228 91 76 91C70.4772 91 66 95.4772 66 101Z" stroke="#02DFEE" strokeWidth="4" strokeLinecap="square" variants={variant}/>
        <motion.path d="M75.5 23C41.5 23 40.9999 76.5 75.5 76.5C110 76.5 110 128 75.5 128" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="135" y1="78" x2="120" y2="78" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
        <motion.line x1="30" y1="78" x2="15" y2="78" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
