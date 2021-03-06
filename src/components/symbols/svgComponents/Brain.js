import { motion } from 'framer-motion';
export const index = '94';
export const name = 'Brain';
export const Symbol = ({ variant }) => {
  return (
    <>
      <motion.path
        d='M47.6352 116.005C50.1351 131.005 70.1351 129.005 74.6352 120.005V29.0052C68.6351 20.0052 49.1352 17.0052 49.1352 36.5051C33.6351 36.5051 31.1351 51.0052 36.6352 59.5052C21.6352 66.5052 19.1351 87.5052 41.1352 93.0052C28.1352 102.005 36.1352 113.005 47.6352 116.005Z'
        stroke='#02DFEE'
        strokeWidth='4'
        strokeLinecap='round'
        variants={variant}
      />
      <motion.path
        d='M101.635 116.01C99.1353 131.01 79.1353 129.01 74.6353 120.01V29.0103C80.6353 20.0103 100.135 17.0103 100.135 36.5103C115.635 36.5103 118.135 51.0103 112.635 59.5103C127.635 66.5103 130.135 87.5103 108.135 93.0103C121.135 102.01 113.135 113.01 101.635 116.01Z'
        stroke='#02DFEE'
        strokeWidth='4'
        strokeLinecap='round'
        variants={variant}
      />
    </>
  );
};
