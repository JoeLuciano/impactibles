import { motion } from 'framer-motion';
export const index = '72';
export const name = 'North Star';
export const Symbol = ({ variant }) => {
  return (
    <>
      <motion.path
        d='M75 14.258L88.3432 55.6316L88.5672 56.3263L89.2971 56.3247L132.769 56.2297L97.5437 81.705L96.9522 82.1327L97.1793 82.8264L110.703 124.141L75.5896 98.5123L75 98.082L74.4104 98.5123L39.2967 124.141L52.8207 82.8264L53.0478 82.1327L52.4563 81.705L17.2309 56.2297L60.7029 56.3247L61.4328 56.3263L61.6568 55.6316L75 14.258Z'
        stroke='#02DFEE'
        strokeWidth='2'
        strokeLinecap='round'
        variants={variant}
      />
    </>
  );
};
