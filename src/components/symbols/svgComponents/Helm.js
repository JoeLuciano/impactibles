import { motion } from 'framer-motion';
export const index = '82';
export const name = 'Helm';
export const Symbol = ({ variant }) => {
  return (
    <>
      <motion.path
        d='M75 34V72.5858C75 73.4767 76.0771 73.9229 76.7071 73.2929L103.991 46.0086L76.7071 73.2929C76.0771 73.9229 76.5233 75 77.4142 75H116H77.4142C76.5233 75 76.0771 76.0771 76.7071 76.7071L103.991 103.991L76.7071 76.7071C76.0771 76.0771 75 76.5233 75 77.4142V116V77.4142C75 76.5233 73.9229 76.0771 73.2929 76.7071L46.0086 103.991L73.2929 76.7071C73.9229 76.0771 73.4767 75 72.5858 75H34H72.5858C73.4767 75 73.9229 73.9229 73.2929 73.2929L46.0086 46.0086L73.2929 73.2929C73.9229 73.9229 75 73.4767 75 72.5858V34Z'
        fill='#C4C4C4'
        stroke='#02DFEE'
        strokeWidth='3'
        variants={variant}
      />
      <motion.path
        d='M72 72.5V77.5C72 77.7761 72.2239 78 72.5 78H77.5C77.7761 78 78 77.7761 78 77.5V72.5C78 72.2239 77.7761 72 77.5 72H72.5C72.2239 72 72 72.2239 72 72.5Z'
        stroke='#02DFEE'
        strokeWidth='7'
        variants={variant}
      />
      <motion.circle
        cx='75'
        cy='75'
        r='50'
        stroke='#02DFEE'
        strokeWidth='20'
        strokeDasharray='4 30'
        variants={variant}
      />
      <motion.circle
        cx='75'
        cy='75'
        r='41.5'
        stroke='#02DFEE'
        strokeWidth='3'
        variants={variant}
      />
    </>
  );
};
