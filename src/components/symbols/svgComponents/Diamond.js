import { motion } from 'framer-motion';
export const index = '93';
export const name = 'Diamond';
export const Symbol = ({ variant }) => {
  return (
    <>
      <motion.path
        d='M79.5 128.5L11 50M79.5 128.5L47 50M79.5 128.5L138.5 50M79.5 128.5L111.5 50M11 50L9 47.5L44 22H69.5M11 50H47M69.5 22H78.5H88M69.5 22L47 50M47 50H80H111.5M138.5 50L140 48L107.5 22H88M138.5 50H111.5M88 22L111.5 50'
        stroke='#02DFEE'
        strokeWidth='2'
        strokeLinecap='round'
        variants={variant}
      />
    </>
  );
};
