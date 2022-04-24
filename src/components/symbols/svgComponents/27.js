import { motion } from 'framer-motion'
export const index = '54'
export const name = '27'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M26 75.5C26 102.286 47.7142 124 74.5 124C101.286 124 123 102.286 123 75.5C123 48.7142 101.286 27 74.5 27C47.7142 27 26 48.7142 26 75.5Z" stroke="#02DFEE" strokeWidth="2" strokeLinecap="square" variants={variant}/>
        <motion.path d="M72.0693 87.2953C72.0693 87.2953 49.7592 87.2953 52.1843 87.2953C53.1542 87.2953 70.1293 73.2304 70.1293 64.9853C70.1293 56.7403 58.4893 56.7403 52.6693 60.1353" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
        <motion.path d="M77 60H96.885L85.245 92.01" stroke="#02DFEE" strokeWidth="2" variants={variant}/>
    </>
  );
};
