export const svg_pixel_size = 150;
export const stroke_width = 5;
export const hover_duration = 0.2;
export const selection_duration = 1;
export const drawPath = (index) => {
  const row = parseInt(index[0]);
  const col = parseInt(index[1]);

  return {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: (row + col) / 5,
        pathLength: {
          type: 'spring',
          duration: 2,
          bounce: 0,
        },
        opacity: {
          duration: 0.1,
        },
      },
    },
  };
};
