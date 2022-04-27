import { motion } from 'framer-motion'
export const index = '84'
export const name = 'Capsule'
export const Symbol = ({ variant }) => {
  return (
    <>
        <motion.path d="M60.3956 61.7866L90.0984 88.5773M60.3956 61.7866L36.9537 87.7766C14.5165 112.653 43.8845 139.815 66.6566 114.567L90.0984 88.5773M60.3956 61.7866L83.8375 35.7966C106.275 10.9204 136.312 37.3399 113.54 62.5873L90.0984 88.5773" stroke="#02DFEE" strokeWidth="4" variants={variant}/>
    </>
  );
};
